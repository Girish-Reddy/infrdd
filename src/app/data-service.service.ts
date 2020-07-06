import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private REST_API_SERVER = "/assets/jsons/";

  constructor(private httpClient: HttpClient) { }

  public bookingDetails() {
    return this.httpClient.get(this.REST_API_SERVER + 'sidemenu.json');
  }
  public viewRepoAPI() {
    return this.httpClient.get(this.REST_API_SERVER + 'repositories.json');
  }
  public bookingEntry(data) {
    return this.httpClient.post('API', data);
  }
}
