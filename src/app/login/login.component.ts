import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
//import { type } from 'os';
//import { Users } from '../app.module';
//import { disableDebugTools } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  username: string;
  password: string;
  


  ngOnInit() {
  }
  
  login(){
      
    if ((this.username == 'admin' && this.password=='admin') || (this.username == 'sam' && this.password=='123') || (this.username == 'harry' && this.password=='1234')) {
      this.route.navigate(['account']);
    }
    else{
      alert("Invalid Username or password")
    }

  }
}

