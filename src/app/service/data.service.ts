import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpParams} from '../constant/http-params';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getUsers() {

    return this.httpClient.get(HttpParams.BASE_URL+HttpParams.USERS_ENDPOINT);
  }

  public getPosts() {
    return this.httpClient.get(HttpParams.BASE_URL+HttpParams.POST_ENDPOINT);
  }

  public getPost(postId) {
    return this.httpClient.get(HttpParams.BASE_URL+HttpParams.POST_ENDPOINT+"/"+postId);
  }

  public getUser(userId) {
    return this.httpClient.get(HttpParams.BASE_URL+HttpParams.USERS_ENDPOINT+"/"+userId);
  }

}
