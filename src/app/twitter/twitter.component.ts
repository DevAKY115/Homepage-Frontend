import { Component, OnInit } from '@angular/core';
import {TwitterService} from "../service/twitter.service";
import {ActivatedRoute} from "@angular/router";


export class Tweet {
  constructor(
    public tweetId:string,
    public username:string,
    public authorId:string) {
  }
}

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  list:Tweet[] = [];
  page:number = this.aRoute.snapshot.params['page'];

  constructor(private twitterService:TwitterService, private aRoute:ActivatedRoute) { }

  ngOnInit(): void {

    if(this.page == undefined){
      this.page = 1;
    }
    this.twitterService.list(this.page).subscribe(
      response => {
        this.list = response;
        this.display();
      }
    );

  }

  display(){
    for(const tweet of this.list){
      (<any>window).twttr.widgets.createTweet(tweet.tweetId, document.getElementById("twitterContent"), {align: "center"});
    }
  }

  grab100(){
    this.twitterService.get100Tweets().subscribe(
      response =>{

      }
    );
  }


}
