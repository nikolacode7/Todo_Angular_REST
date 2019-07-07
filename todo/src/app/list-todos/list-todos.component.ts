import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date 
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[]

  message : string

//    = [
//    new Todo(1, 'Learn to work', false, new Date()),
//    new Todo(2, 'Learn Angular', true, new Date()),
//    new Todo(3, 'Learn best', false, new Date())
//    //{id: 1, description: 'Learn to work'},
//    //{id: 2, description: 'Learn Angular'},
//    //{id: 3, description: 'Learn many things'}
//  ]

  /*todo = {
    id: 1,
    description: 'Learn to work'
  }*/

  constructor(
    private todoService:TodoDataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }  
  
  deleteTodo(id) { 
    console.log(`Delete Todo ${id}`)
    this.todoService.deleteTodo('in28minutes', id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} successful!`;
        this.refreshTodos();

      }
    )
  }

  updateTodo(id) { 
    console.log(`Update Todo ${id}`)
    this.router.navigate(['todos', id])
    
  }

  addTodo(id) { 
    this.router.navigate(['todos',-1])   
  }

}
