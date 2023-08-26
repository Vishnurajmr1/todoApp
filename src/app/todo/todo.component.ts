import { Component,OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [''],
})
export class TodoComponent implements OnInit {
  todos:any[]=[];
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
   this.todoService.fireStoreCollection.valueChanges({idField:'id'}).subscribe(item=>{
    this.todos=item.sort((a:any,b:any)=>{return a.isDone-b.isDone});
   })
  }
  onClick(titleInput: HTMLInputElement):void {
    if(titleInput.value){
      this.todoService.addTodo(titleInput.value);
      titleInput.value="";
    }
  }
  onStatuschange(id:string,newStatus:boolean){
    this.todoService.updateTodoStatus(id,newStatus);
  }
  onDelete(id:string){
    this.todoService.deleteTodo(id)
  }

}
