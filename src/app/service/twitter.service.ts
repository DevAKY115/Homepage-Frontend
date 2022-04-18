import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Tweet} from "../twitter/twitter.component";

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  bearer: string = "AAAAAAAAAAAAAAAAAAAAAIPUbAEAAAAAVoAvZyTJONRvdnkiJyWDMXX4Zg4%3DOxwFjlIoTrwXFn2GbED47lMxdSOL5S1aLW3pfoN4D8CIzzPTeg";

  constructor(private http:HttpClient) { }

  getTweets(){
    return this.http.get(`http://localhost:8080/twitter/getTweets`);
  }

  get100Tweets(){
    return this.http.get(`http://localhost:8080/twitter/get100Tweets`);
  }

  list(page:number){
    return this.http.get<Tweet[]>(`http://localhost:8080/twitter/list/${page}`);
  }


}
