import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../Services/utility.service';
import { Observable } from 'rxjs';
@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
 userName: string = '';
 userList : any;
 @Output() login = new EventEmitter<string>();
 @Output() users = new EventEmitter<any>();
 constructor(private router:Router,private service: UtilityService) { }
 
 ngOnInit() {
     this.getUserMaster();
 }
 getUserMaster() {
    //this.users = this.service.getUsers();
    this.service.getUsers().subscribe(data => this.userList = data);
  }
 submit()
 {
 console.log(this.userName)
 this.login.emit(this.userName);
 this.users.emit(this.userList);
 this.router.navigate(['/About']);
 }
 fromParrentComponantClick()
 {
     alert("From parrent componant");
 }
 
}