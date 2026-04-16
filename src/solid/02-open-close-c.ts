export class HttpClient {
  public async get(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    return { data, status: response.status };
  }
}
