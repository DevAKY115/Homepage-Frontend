import { Component, OnInit } from '@angular/core';
import {BookmarkService} from "../service/bookmark.service";
import {Router} from "@angular/router";

export class Bookmark{
  id:number;
  name:string;
  url!:URL;
  ico!:URL;
  constructor(id:number, name:string, url:string) {
    this.id = id;
    this.name=name;
    if(url !== "") {
      this.url = new URL(url);
      this.ico = new URL("https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url="
        +this.url.origin + "&size=40");
    } else {
/*      this.url = null*/
    }
  }
}

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  bookmarksList:Bookmark[] = [];
  isDataAvailable:boolean = false;

  constructor(private bookmarkService:BookmarkService, private router:Router) {}

  ngOnInit(): void {
    this.refreshBookmarks();
  }

  refreshBookmarks(){
    this.bookmarkService.getAllBookmarks().subscribe(
      response => {
        this.bookmarksList = response;
        this.isDataAvailable = true;
      }
    )
  }

  addBookmark(){
    this.router.navigate(['bookmarks/addBookmark']);
  }

  manageBookmark(){
    this.router.navigate(['bookmarks/manageBookmarks'])
  }

}
