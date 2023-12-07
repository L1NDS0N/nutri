import axios, { AxiosRequestConfig } from 'axios';

const api_v1 = axios.create({ baseURL: '/api/v1' });

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

  protected get<T>({ endpoint, config }: BasicResource = {}) {
    return this.api.get<T>(`${this.resource}/${endpoint ?? ''}`, config);
  }
  protected post<T>({ endpoint, data, config }: SendDataResource) {
    return this.api.post<T>(`${this.resource}/${endpoint ?? ''}`, data, config);
  }
  protected put<T>({ endpoint, data, config }: SendDataResource) {
    return this.api.put<T>(`${this.resource}/${endpoint ?? ''}`, data, config);
  }
  protected delete<T>({ endpoint, config }: BasicResource = {}) {
    return this.api.delete<T>(`${this.resource}/${endpoint ?? ''}`, config);
  }
}
