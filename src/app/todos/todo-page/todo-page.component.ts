import { Component, OnInit } from '@angular/core';
import {Todo} from "../todos.component";
import {TodoService} from "../../service/todo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  currentTodo!: Todo;
  isDataAvailable:boolean = false;
  constructor(private todoService:TodoService, private aRoute:ActivatedRoute, private router:Router) {

  }

  ngOnInit(): void {

    this.currentTodo = new Todo(-1, "", false, new Date);


    if(this.aRoute.snapshot.params['id'] != -1) {
      this.todoService.getTodo(this.aRoute.snapshot.params['id']).subscribe(
        response => {
          this.currentTodo = response;
        }
      )
    }
  }

  saveTodo(){
    this.todoService.updateTodo(this.currentTodo).subscribe(
      response => {
        this.router.navigate(['todos'])
      }
    );
  }

  deleteTodo(){
    console.log(this.currentTodo.id);
    this.todoService.deleteTodo(this.currentTodo.id).subscribe(
      response => {
        this.router.navigate(['todos']);
      }
    )
  }

}
