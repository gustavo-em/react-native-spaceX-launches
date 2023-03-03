import {Launch} from '../models/launches';
import {HttpClient} from '../plugins/HttpClient';

export class LaunchesService {
  private httpClient: HttpClient;
  public endPoint = '/launches';

  constructor() {
    this.httpClient = new HttpClient();
  }

  async getAll(): Promise<Launch[]> {
    const response = await this.httpClient.get<Launch[]>(this.endPoint);
    return response.data;
  }

  async getById(id: string): Promise<Launch> {
    const response = await this.httpClient.get<Launch>(
      `${this.endPoint}/${id}`,
    );
    return response.data;
  }

  async create(launch: Launch): Promise<Launch> {
    const response = await this.httpClient.post<Launch>(this.endPoint, launch);
    return response.data;
  }

  async update(launch: Launch): Promise<Launch> {
    const response = await this.httpClient.put<Launch>(
      `${this.endPoint}/${launch.id}`,
      launch,
    );
    return response.data;
  }

  async delete(id: string): Promise<void> {
    await this.httpClient.delete(`/launches/${id}`);
  }
}
