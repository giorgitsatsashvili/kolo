import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test2';


tasks  =[

{
  title:'sdasdasda',
  complete:true
},{
  title:'sdasdasda',
  complete:true
},{
  title:'sdasdasda',
  complete:false
},

];

add(value){
this.tasks.push({
  title:value,
  complete:false
});
}

toggle(item){
item.complete=!item.complete;
}

remove(ind){
this.tasks.splice(ind,1);
}

}
