import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  time!:string;
  date!:Date;

  constructor() {
    this.time = new Date().toString().split(' ')[4].substring(0,5);
    setInterval(() => {
      this.time = new Date().toString().split(' ')[4].substring(0,5);
    }, 60000);
    this.date = new Date();
  }

  ngOnInit(): void {
  }

}
