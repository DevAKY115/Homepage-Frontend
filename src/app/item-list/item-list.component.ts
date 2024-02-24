import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(private router:Router) { }

  itemList: WebScraperItem[] = [
    {name: "4090", url: "https://www.caseking.de/asus-geforce-rtx-4090-tuf-o24g-24576-mb-gddr6x-gcas-466.html?tplview=desktop", price: 1999.00, threshold: 1200.00, belowThreshold: false, group: "GraKa", website: "Caseking"},
    {name: "7900XT", url: "https://www.caseking.de/asrock-radeon-rx-7900-xt-phantom-gaming-oc-20480-mb-gddr6-gcar-006.html?tplview=desktop", price: 799.41, threshold: 800.00, belowThreshold: true, group: "GraKa", website: "Caseking"},
    {name: "Corsair XD5", url: "https://www.caseking.de/corsair-hydro-x-series-xd5-rgb-pumpe-reservoir-kombo-schwarz-wapu-189.html?flxSmartSuggest=1", price: 174.90, threshold: 130.00, belowThreshold: false, group: "Watercooling", website: "Caseking"}
  ]

  ngOnInit(): void {
  }

  addItem(){
    this.router.navigate(["addItem", -1])
  }

}

class WebScraperItem {

  name: string
  url: string
  price: number
  threshold: number
  belowThreshold: boolean
  group: string
  website: string


  constructor(name: string, url: string, price: number, threshold: number, belowThreshold: boolean, group: string, website: string) {
    this.name = name;
    this.url = url;
    this.price = price;
    this.threshold = threshold;
    this.belowThreshold = belowThreshold;
    this.group = group;
    this.website = website;
  }
}
