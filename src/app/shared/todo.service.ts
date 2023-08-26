import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  fireStoreCollection:AngularFirestoreCollection;
  constructor(private fireStore:AngularFirestore) {
    this.fireStoreCollection=fireStore.collection('todos');
   }
   addTodo(title:string){
    this.fireStoreCollection.add({
      title,
      isDone:false
    })
   }
   updateTodoStatus(id:string,newStatus:boolean){
    this.fireStoreCollection.doc(id).update({isDone:newStatus});
   }
   deleteTodo(id:string){
    this.fireStoreCollection.doc(id).delete();
   }
}
