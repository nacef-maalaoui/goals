import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  id : any ;
  goal : any ;

  constructor(private dt : DataService , private act : ActivatedRoute , private root : Router){}

  ngOnInit() : void {
    this.id = this.act.snapshot.paramMap.get('id');

    this.dt.byid(this.id).subscribe({
      next : (res)=>{
        this.goal = res;
      },
      error : (err)=>{
        console.log(err);
      }
    })
  }

  save(){
    this.dt.update(this.id,this.goal).subscribe({
      next : (res)=>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your jouer has been updated",
          showConfirmButton: false,
          timer: 1000
        });
        this.root.navigate(['/todos'])
      },
      error : (err)=>{
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Your jouer has not updated",
          showConfirmButton: false,
          timer: 1000
        });      }
    })
  }


}
