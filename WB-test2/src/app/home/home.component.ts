import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public route:Router){

  };

  table(){
    this.route.navigate(['table']);
  }

  login(){
    this.route.navigate(['login']);
  }

  stream(){
    this.route.navigate(['stream']);
  }
  apiclient (){
    this.route.navigate(['ApiClient']);
  }

  }


