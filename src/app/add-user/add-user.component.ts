import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUser:any
  constructor(private fb : FormBuilder,
    private routes : Router,
    private userService : UserService) 
    {
      this.addUser = this.fb.group({
        identifiant: ['',Validators.required],
        nom : ['', Validators.required],
        prenom : ['', Validators.required],
        password : ['', Validators.required],
        statut : ['', Validators.required],
        nbHmini : ['', Validators.required],
     })
    }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.addUser.value);
    this.userService.addUser(this.addUser.value).subscribe(
      data => {
        console.log(data);
        this.routes.navigate(['/allUser']);
      }
    )
  }



}
