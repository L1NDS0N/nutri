import { CoreService } from "./core.service";

export class LoadingCrudService<
  T extends { id?: number | string }
> extends CoreService {
  private isLoadingCrud = false;

  constructor({ resource }: { resource?: string }) {
    super({ resource });
  }

  index() {
    this.startLoading();
    return this.get();
  }

  storeOne({ data }: { data: Partial<T> }) {
    this.startLoading();
    return this.post({ data });
  }

  updateOne({ data }: { data: Partial<T> }) {
    this.startLoading();
    return this.put({ endpoint: `${data.id}`, data });
  }

  deleteOne({ data }: { data: Partial<T> }) {
    this.validateIdPresent(data);
    this.startLoading();
    return this.delete({ endpoint: `${data.id}` });
  }

  get isLoading() {
    return this.isLoadingCrud;
  }

  private validateIdPresent(data: Partial<T>) {
    if (!data?.id) throw new Error("ID not present on the data you informed");
  }

  private startLoading() {
    this.isLoadingCrud = true;
  }

  private stopLoading() {
    this.isLoadingCrud = false;
  }
}
