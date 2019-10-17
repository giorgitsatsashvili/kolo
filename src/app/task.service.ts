import { Injectable } from '@angular/core';

interface ITask{
  id:number,
  title:string,
  complete:boolean,
  description:string
}

let i:ITask[]=[
  {
  id:1,
  title:'ssda',
  complete:true,
  description:'fasfasfasfa'
},
{
  id:2,
  title:'sdasdasdfsdfsdfsda',
  complete:true,
  description:'fasfasfasfa'
},
{
  id:3,
  title:'sdasdasda',
  complete:false,
  description:'fasfasfasfa'
}
];

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks():ITask[]
  {
    return i;
  }

  addTask(task:ITask):void{
    i.push(task);
  }

  removeTask(id:number): void{
    i = i.filter(
      (task) => {
        return task.id !== id
      }
    );
  }
}
