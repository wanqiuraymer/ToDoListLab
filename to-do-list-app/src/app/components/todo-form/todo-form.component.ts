import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Todo } from '../../Interfaces/todo.model';
@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent implements OnInit{
  @Input() todo: Todo = {
    task:'',
    completed: false,
    duration: 0,
    priority: 'NORMAL'

  };
  @Output() save = new EventEmitter<Todo>();
  OriginalTodo: Todo = this.todo;
  task: string='';
  duration: number = 0;
  priority: 'NORMAL' | 'HIGH' | 'LOW' = 'NORMAL';
  
  constructor(){}
  ngOnInit(): void {
    if(!this.todo){
      this.resetForm();
    }else{
      this.OriginalTodo = {...this.todo};
    }
  }
  onSubmit(form:NgForm){
    if(form.valid){
      this.todo.duration=this.duration;
      this.todo.task=this.task;
      this.todo.priority = this.priority;
      this.save.emit(this.todo);
      form.reset();
      this.resetForm();
    }
  }
  resetForm(){
    this.todo={
      task:'',
      completed:false,
      duration:0,
      priority:'NORMAL'
    };
  }




}
