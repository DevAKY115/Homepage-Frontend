import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { TabsComponent } from './tabs/tabs.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import {HttpClientModule} from "@angular/common/http";
import { TodoPageComponent } from './todos/todo-page/todo-page.component';
import {FormsModule} from "@angular/forms";
import { AddBookmarkComponent } from './bookmarks/add-bookmark/add-bookmark.component';
import { ManageBookmarksComponent } from './bookmarks/manage-bookmarks/manage-bookmarks.component';
import { TwitterComponent } from './twitter/twitter.component';
import { VocabsComponent } from './japanese/vocabs/vocabs.component';
import { HiraganaComponent } from './japanese/hiragana/hiragana.component';
import { MenuComponent } from './japanese/menu/menu.component';
import { KatakanaComponent } from './japanese/katakana/katakana.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    TodoPageComponent,
    AddBookmarkComponent,
    ManageBookmarksComponent,
    TwitterComponent,
    VocabsComponent,
    HiraganaComponent,
    MenuComponent,
    KatakanaComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
