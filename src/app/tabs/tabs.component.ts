import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  animations: [trigger('hoverOver',[
    state('hover', style({
      transform: "scale(1.3)"
    })),
    state('noHover', style({
    })),
    transition('hover => noHover', [animate(200)]),
    transition('noHover => hover', [animate(200)])
  ])]
})
export class TabsComponent implements OnInit {

  onHoverBookmark : boolean = false;
  onHoverTodo : boolean = false;
  onHoverNotes : boolean = false;
  onHoverTwitter : boolean = false;
  onHoverJapanese : boolean = false;



  toggle(value : string){
    switch (value){
      case 'Bookmark':
        this.onHoverBookmark = !this.onHoverBookmark;
        break;
      case 'Todo':
        this.onHoverTodo = !this.onHoverTodo;
        break;
      case 'Notes':
        this.onHoverNotes = !this.onHoverNotes;
        break;
      case 'Twitter':
        this.onHoverTwitter = !this.onHoverTwitter;
        break;
      case 'Japanese':
        this.onHoverJapanese = !this.onHoverJapanese;
        break;
      default:
        break;
    }
  }

  constructor() { }

  ngOnInit(): void {

  }

}
