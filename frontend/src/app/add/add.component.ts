import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  goals = {
    name : '',
    goal : 0,
    image : ''
  }

  constructor(private dt: DataService , private router : Router){}

  add(){
    this.dt.create(this.goals).subscribe({
      next : (res)=>{
        console.log(res);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your jouer has been saved",
          showConfirmButton: false,
          timer: 1500
        });

        this.router.navigate(['todos']);

      },
      error : (err)=>{
        console.log(err);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Your jouer has not saved",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }
}
