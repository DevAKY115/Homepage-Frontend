import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Todo} from "src/app/todos/todos.component"

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  bearer: string = "AAAAAAAAAAAAAAAAAAAAAIPUbAEAAAAAVoAvZyTJONRvdnkiJyWDMXX4Zg4%3DOxwFjlIoTrwXFn2GbED47lMxdSOL5S1aLW3pfoN4D8CIzzPTeg";

  constructor(private http:HttpClient) { }

  getAllTodos(){
      return this.http.get<Todo[]>(`http://localhost:8080/todoList/allTodos`);
  }

  getTodo(id:number){
      return this.http.get<Todo>(`http://localhost:8080/todoList/${id}`)
  }

  updateTodo(updatedTodo:Todo){
      let id = updatedTodo.id;
      return this.http.put(`http://localhost:8080/todoList/${id}`, updatedTodo);
  }

  deleteTodo(id:number){
    return this.http.delete(`http://localhost:8080/todoList/${id}`)
  }

  twitterTest(username:string){
    const header:HttpHeaders = new HttpHeaders("Authorization: Bearer " + this.bearer);
    return this.http.get("https://api.twitter.com/2/users/by?usernames=warrock2414", {headers: header});
  }
}
