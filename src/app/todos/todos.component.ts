import { Component, OnInit } from '@angular/core';
import {TodoService} from "../service/todo.service";
import {timeout} from "rxjs";
import {Router} from "@angular/router";


export class Todo {
  constructor(
    public id:number,
    public description:String,
    public done:boolean,
    public targetDate:Date) {
  }
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoList:Todo[] = [];
  isDataAvailable:boolean = false;

  constructor(private service:TodoService, private router:Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.service.getAllTodos().subscribe(
      response => {
        this.todoList = response;
        this.isDataAvailable = true;
      }
    )
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }

  updateById(id:number){
    this.router.navigate(['todos', id])
  }





}
