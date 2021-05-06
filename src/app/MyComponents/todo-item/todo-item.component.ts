
import { ToDo } from 'src/app/ToDo';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todos: ToDo;
  @Output() todoDelete: EventEmitter<ToDo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onClick(todos: ToDo){
    this.todoDelete.emit(todos);
    console.log('onCLick has been triggered');
  }

}
