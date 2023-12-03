import { Dispatch, SetStateAction } from "react";
import { CoreService } from "./core.service";

type RequestData<T> = {
  data: Partial<T>;
};

export const initialLoadingTypes = {
  isLoading: false,
  isIndexing: false,
  isUpdating: false,
  isStoring: false,
  isShowing: false,
  isDeleting: false,
};

export type LoadingTypes = typeof initialLoadingTypes;

export type SetLoadingTypesFn = Dispatch<SetStateAction<LoadingTypes>>;
export class LoadingCrudService<
  T extends { id?: number | string }
> extends CoreService {
  stateManager: SetLoadingTypesFn;
  constructor({
    resource,
    setLoading,
  }: {
    resource?: string;
    setLoading: SetLoadingTypesFn;
  }) {
    super({ resource });
    this.stateManager = setLoading;
  }

  async index() {
    this.startLoading("isIndexing");
    return this.get()
      .then((response) => {
        this.stopLoading("isIndexing");
        return response;
      })
      .catch((error) => {
        this.stopLoading("isIndexing");
        console.error("Error in index:", error);
        throw error;
      });
  }

  async show({ data }: RequestData<T>) {
    this.validateIdPresent(data);
    this.startLoading("isShowing");
    return this.get({ endpoint: `${data.id}` })
      .then((response) => {
        this.stopLoading("isShowing");
        return response;
      })
      .catch((error) => {
        this.stopLoading("isShowing");
        console.error("Error in index:", error);
        throw error;
      });
  }

  async storeOne({ data }: RequestData<T>) {
    this.startLoading("isStoring");
    return this.post({ data })
      .then((response) => {
        this.stopLoading("isStoring");
        return response;
      })
      .catch((error) => {
        this.stopLoading("isStoring");
        console.error("Error in index:", error);
        throw error;
      });
  }

  async updateOne({ data }: RequestData<T>) {
    this.startLoading("isUpdating");
    return this.put({ endpoint: `${data.id}`, data })
      .then((response) => {
        this.stopLoading("isUpdating");
        return response;
      })
      .catch((error) => {
        this.stopLoading("isUpdating");
        console.error("Error in index:", error);
        throw error;
      });
  }

  async deleteOne({ data }: RequestData<T>) {
    this.validateIdPresent(data);
    this.startLoading("isDeleting");
    return this.delete({ endpoint: `${data.id}` })
      .then((response) => {
        this.stopLoading("isDeleting");
        return response;
      })
      .catch((error) => {
        this.stopLoading("isDeleting");
        console.error("Error in index:", error);
        throw error;
      });
  }

  private validateIdPresent(data: Partial<T>) {
    if (!data?.id)
      throw new Error("ID not present on the data you've informed");
  }

  private startLoading(type: keyof LoadingTypes) {
    this.stateManager((prevData) => ({
      ...prevData,
      [type]: true,
      isLoading: true,
    }));
  }

  private stopLoading(type: keyof LoadingTypes) {
    this.stateManager((prevData) => ({
      ...prevData,
      [type]: false,
      isLoading: this.hasAnotherLoadingDiferentTo(prevData, type),
    }));
  }

  private hasAnotherLoadingDiferentTo(
    data: LoadingTypes,
    type: keyof LoadingTypes
  ) {
    // console.log({data, type})
    return Object.keys(data)
      .filter((key) => key !== type)
      .reduce((ac, t) => {
        return ac && data[t as keyof LoadingTypes];
      }, true);
  }
}
