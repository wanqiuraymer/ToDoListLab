import { Component } from '@angular/core';
import { Todo } from './Interfaces/todo.model';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoFormComponent, TodoItemComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list-app';
  todos:Todo[]= [
    {task:'fold clothes', duration: 2.0, completed: true, priority:'HIGH'},
    {task:'put clothes in the dresser', duration: 0.5, completed: true, priority:null},
    {task:'call mom', duration: 0.75, completed: false, priority:'HIGH'},
    {task:'relax', duration:null, completed: false, priority:'LOW'}
  ];

  addTodo(newTodo: Todo){
    console.log(newTodo);
    this.todos.push(newTodo);
  };

  markAsComplete(todo: Todo){
    const index = this.todos.findIndex(r => r === todo);
    if(index !== -1){
      this.todos[index].completed = !this.todos[index].completed;
    }
  };

  removeTodo(todo: Todo){
    this.todos = this.todos.filter(r => r !== todo);
  }
}
