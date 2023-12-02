import axios, { AxiosRequestConfig } from "axios";

const api_v1 = axios.create({ baseURL: "/api/v1" });

interface BasicResource {
  endpoint?: string;
  config?: AxiosRequestConfig<any>;
}
interface SendDataResource extends BasicResource {
  data: any;
}

export class CoreService {
  protected api = api_v1;
  private resource?: string;
  constructor({ resource }: { resource?: string }) {
    this.resource = resource;
  }

  protected get({ endpoint, config }: BasicResource = {}) {
    return this.api.get(`${this.resource}/${endpoint ?? ''}`, config);
  }
  protected post({ endpoint, data, config }: SendDataResource) {
    return this.api.post(`${this.resource}/${endpoint ?? ''}`, data, config);
  }
  protected put({ endpoint, data, config }: SendDataResource) {
    return this.api.put(`${this.resource}/${endpoint ?? ''}`, data, config);
  }
  protected delete({ endpoint, config }: BasicResource = {}) {
    return this.api.delete(`${this.resource}/${endpoint ?? ''}`, config);
  }
}
