import { Component, OnInit } from '@angular/core';
import {Bookmark} from "../bookmarks.component";
import {BookmarkService} from "../../service/bookmark.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.css']
})
export class AddBookmarkComponent implements OnInit {

  currentBookmark!:Bookmark;

  constructor(private bookmarkService:BookmarkService, private router:Router) { }

  ngOnInit(): void {
    this.currentBookmark = new Bookmark(-1, "", "https://example.com");

  }

  saveBookmark(url:string){
    this.currentBookmark.url = new URL(url);
    this.currentBookmark.ico = new URL("https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url="
      +this.currentBookmark.url.origin + "&size=40");
    this.bookmarkService.updateBookmark(this.currentBookmark).subscribe(
      response => {
        this.router.navigate(['bookmarks']);
      }
    )
  }

}
