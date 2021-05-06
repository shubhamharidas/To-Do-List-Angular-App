import { ToDo } from 'src/app/ToDo';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  locaItem: string;
  todos: ToDo[];
  constructor() {

    this.locaItem = localStorage.getItem('todos');
    if (this.locaItem == null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.locaItem);
    }
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  deleteToDo(todos: ToDo) {
    console.log(todos);
    const index = this.todos.indexOf(todos);
    this.todos.splice(index, 1);
    localStorage.setItem('todos' , JSON.stringify(this.todos));

  }

  // tslint:disable-next-line: typedef
  addToDo(todos: ToDo) {
    console.log(todos);
    this.todos.push(todos);
    localStorage.setItem('todos' , JSON.stringify(this.todos));
  }
}
