import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users:any;

  constructor(private userService:UserService,
    private routes:Router,
    
    ) { }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(){
    this.userService.listUser().subscribe((data:any)=>{
      console.log(data);
      this.users = data;
    })
  }

  delUser(datas:any){
    this.userService.deleteUser(datas._id).subscribe(
      data => {
        console.log(data);
        this.users = this.users.filter((u:any)=> u !== datas)
        
      }
    )
  }
}
