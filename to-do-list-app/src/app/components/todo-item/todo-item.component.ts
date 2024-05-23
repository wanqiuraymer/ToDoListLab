import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Interfaces/todo.model';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo:Todo = {
    task: '',
    completed: false,
    duration: 0,
    priority: 'NORMAL',
  };
  @Output() markComplete = new EventEmitter<Todo>();
  @Output() removeTodo = new EventEmitter<Todo>();

  constructor(){}
  onMarkComplete(){
    this.markComplete.emit(this.todo)
  }
  onRemoveTodo(){
    this.removeTodo.emit(this.todo)
  }
}
