import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update0/update.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  {path : '' , redirectTo : 'todos' , pathMatch : 'full'},
  {path : 'todos' , component : TodosComponent},
  {path : 'add' , component : AddComponent},
  {path : 'update/:id' , component : UpdateComponent},
  {path : '**' , component : NotfoundComponent}
];
