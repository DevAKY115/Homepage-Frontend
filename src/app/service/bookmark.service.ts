import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Bookmark} from "../bookmarks/bookmarks.component";

@Injectable({
  providedIn: 'root'
})

export class BookmarkService {

  constructor(private http:HttpClient) {}

  getAllBookmarks(){
    return this.http.get<Bookmark[]>(`http://localhost:8080/bookmarks/allBookmarks`);
  }

  getBookmark(id:number){
    return this.http.get<Bookmark>(`http://localhost:8080/bookmarks/${id}`);
  }

  updateBookmark(updatedBookmark:Bookmark){
    let id = updatedBookmark.id;
    return this.http.put(`http://localhost:8080/bookmarks/${id}`, updatedBookmark);
  }

  deleteBookmark(id:number){
    return this.http.delete(`http://localhost:8080/bookmarks/${id}`);
  }
}
