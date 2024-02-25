import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ItemService} from "../service/item.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(private router:Router, private itemService: ItemService) { }

  itemList: WebScraperItem[] = []

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe(
      response => {this.itemList = response }
    )
  }

  addItem(){
    this.router.navigate(["itemlist", -1])
  }

  editItem(id: number){
    this.router.navigate(["itemlist", id])
  }

  updatePrices(){
    this.itemService.updatePrices().subscribe(
      response => {
        window.location.reload();
      }
    )
  }

}

export class WebScraperItem {

  id = -1
  name: string = ""
  url: string = ""
  price: number = 0
  threshold: number = 0
  belowThreshold: boolean = false
  productGroup: string = ""
  website: string = ""
  available: boolean = false;


/*  constructor(name: string, url: string, price: number, threshold: number, belowThreshold: boolean, group: string, website: string) {
    this.name = name;
    this.url = url;
    this.price = price;
    this.threshold = threshold;
    this.belowThreshold = belowThreshold;
    this.group = group;
    this.website = website;
  }*/

  constructor() {
  }
}
