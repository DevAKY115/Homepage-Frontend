import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookmarksComponent} from "./bookmarks/bookmarks.component";
import {TodosComponent} from "./todos/todos.component";
import {NotesComponent} from "./notes/notes.component";
import {TodoPageComponent} from "./todos/todo-page/todo-page.component";
import {AddBookmarkComponent} from "./bookmarks/add-bookmark/add-bookmark.component";
import {ManageBookmarksComponent} from "./bookmarks/manage-bookmarks/manage-bookmarks.component";
import {TwitterComponent} from "./twitter/twitter.component";
import {VocabsComponent} from "./japanese/vocabs/vocabs.component";
import {HiraganaComponent} from "./japanese/hiragana/hiragana.component";
import {MenuComponent} from "./japanese/menu/menu.component";
import {KatakanaComponent} from "./japanese/katakana/katakana.component";
import {ItemListComponent} from "./item-list/item-list.component";
import {AddItemComponent} from "./item-list/add-item/add-item.component";

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
  {path: "japanese/menu", component: MenuComponent},
  {path: "japanese/vocabs", component: VocabsComponent},
  {path: "japanese/vocabs/:chapter", component: VocabsComponent},
  {path: "japanese/hiragana", component: HiraganaComponent},
  {path: "japanese/katakana", component: KatakanaComponent},
  {path: "itemlist", component: ItemListComponent},
  {path: "itemlist/:id", component: AddItemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
