import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  todos: string[] = []
  newTodo:string = ''

  addTodo(){
    if(this.newTodo.trim()){
      this.todos.push(this.newTodo.trim())
      this.newTodo = '';
    }
  }

  removeTodo(index:number){
    this.todos.splice(index,1)
  }

}
