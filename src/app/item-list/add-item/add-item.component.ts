import { Component, OnInit } from '@angular/core';
import {WebScraperItem} from "../item-list.component";
import {ItemService} from "../../service/item.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  currentItem! : WebScraperItem;
  constructor(private itemService:ItemService, private aRoute:ActivatedRoute, private router:Router) { }



  ngOnInit(): void {

    this.currentItem = new WebScraperItem()

    if(this.aRoute.snapshot.params['id'] != -1) {
      this.itemService.getItem(this.aRoute.snapshot.params['id']).subscribe(
        response => {this.currentItem = response}
      )
    }
  }

  getInformation(){
    this.itemService.getInformation(this.currentItem.url).subscribe(
      response => {this.currentItem = response})
  }

  createItem(){
    this.itemService.createItem(this.currentItem).subscribe(
      response => {this.router.navigate(["itemlist"])}
    )
  }

}
