import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WebScraperItem} from "../item-list/item-list.component";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  getInformation(url:string){
    return this.http.put<WebScraperItem>(`http://localhost:8080/grabInformation`, url)
  }

  createItem(item: WebScraperItem){
    return this.http.put<WebScraperItem>(`http://localhost:8080/createItem`, item)
  }

  getAllItems(){
    return this.http.get<WebScraperItem[]>(`http://localhost:8080/getAllItems`)
  }

  getItem(id: number){
    return this.http.get<WebScraperItem>(`http://localhost:8080/getItem/${id}`)
  }

  updatePrices(){
    return this.http.get<WebScraperItem>(`http://localhost:8080/updatePrices`)
  }
}
