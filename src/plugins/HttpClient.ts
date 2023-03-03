import axios, {AxiosInstance, AxiosResponse} from 'axios';

export class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.spacexdata.com/v5',
    });
  }

  public async get<T>(url: string): Promise<AxiosResponse<T>> {
    return await this.axiosInstance.get<T>(url);
  }

  public async post<T>(url: string, data: any): Promise<AxiosResponse<T>> {
    return await this.axiosInstance.post<T>(url, data);
  }

  public async put<T>(url: string, data: any): Promise<AxiosResponse<T>> {
    return await this.axiosInstance.put<T>(url, data);
  }

  public async delete<T>(url: string): Promise<AxiosResponse<T>> {
    return await this.axiosInstance.delete<T>(url);
  }
}
