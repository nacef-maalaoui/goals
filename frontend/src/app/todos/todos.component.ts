import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  goals : any = [];

  constructor(private dt : DataService){}

  ngOnInit() : void {
    this.dt.todo().subscribe({
      next : (res)=>{
        this.goals = res;
      },
      error : (err)=>{
        console.log(err);

      }
    })
  }

  supp(id : any){
    this.dt.supp(id).subscribe({
      next : (res)=>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Jouer has been Deleted",
          showConfirmButton: false,
          timer: 1000
        });
        this.ngOnInit();
      },
      error : (err)=>{
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Your Jouer has not Deleted",
          showConfirmButton: false,
          timer: 1000
        });
      }
    })
  }
}
