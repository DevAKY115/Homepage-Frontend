import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookmarksComponent} from "./bookmarks/bookmarks.component";
import {TodosComponent} from "./todos/todos.component";
import {NotesComponent} from "./notes/notes.component";
import {TodoPageComponent} from "./todos/todo-page/todo-page.component";
import {AddBookmarkComponent} from "./bookmarks/add-bookmark/add-bookmark.component";
import {ManageBookmarksComponent} from "./bookmarks/manage-bookmarks/manage-bookmarks.component";
import {TwitterComponent} from "./twitter/twitter.component";
import {VocabsComponent} from "./vocabs/vocabs.component";

const routes: Routes = [
  {path: "", component: BookmarksComponent},
  {path: "home", component: BookmarksComponent},
  {path: "bookmarks", component: BookmarksComponent},
  {path: "bookmarks/addBookmark", component: AddBookmarkComponent},
  {path: "bookmarks/manageBookmarks", component: ManageBookmarksComponent},
  {path: "todos", component: TodosComponent},
  {path: "todos/:id", component: TodoPageComponent},
  {path: "twitter", component: TwitterComponent},
  {path: "twitter/:page", component: TwitterComponent},
  {path: "japanese/vocabs", component: VocabsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
