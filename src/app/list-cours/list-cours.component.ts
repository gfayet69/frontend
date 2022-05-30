import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursService } from '../services/cours.service';

@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.component.html',
  styleUrls: ['./list-cours.component.css']
})
export class ListCoursComponent implements OnInit {

  ues :any;
  constructor(private coursService:CoursService,
    private routes:Router,
    
    ) { }

  ngOnInit(): void {
    this.loadCours();
  }

  loadCours(){
    this.coursService.listCours().subscribe((data:any)=>{
      console.log(data);
      this.ues = data;
    })
  }

}
