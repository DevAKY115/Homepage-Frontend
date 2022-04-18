import { Component, OnInit } from '@angular/core';
import {BookmarkService} from "../../service/bookmark.service";
import {Router} from "@angular/router";
import {Bookmark} from "../bookmarks.component";

@Component({
  selector: 'app-manage-bookmarks',
  templateUrl: './manage-bookmarks.component.html',
  styleUrls: ['./manage-bookmarks.component.css']
})
export class ManageBookmarksComponent implements OnInit {

  bookmarkList!:Bookmark[];
  isDataAvailable:boolean = false;

  constructor(private bookmarksService:BookmarkService, private router:Router) { }

  ngOnInit(): void {

    this.bookmarksService.getAllBookmarks().subscribe(
      response => {
        this.bookmarkList = response;
        this.isDataAvailable = true;
      }
    )
  }

  deleteBookmark(id:number){
    this.bookmarksService.deleteBookmark(id).subscribe(
      response => {
        this.isDataAvailable = false;
        this.ngOnInit();
      }
    )

/*    window.location.reload();*/
    this.router.navigate(['bookmarks/manageBookmarks']);
  }
}
