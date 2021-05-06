import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  title: string;
  description: string;
  constructor() { }
  @Output() todoAdd: EventEmitter<ToDo> = new EventEmitter();
  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onSubmit(){
    const todos = {
      sno: 8,
      title: this.title,
      description: this.description,
      active: true
    };
    this.todoAdd.emit(todos);
  }
}
