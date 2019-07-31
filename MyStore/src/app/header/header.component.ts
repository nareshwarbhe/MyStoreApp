import { Component, OnInit,ViewChild } from '@angular/core';
import {LoginComponent} from '../login/login.component';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @ViewChild(LoginComponent, { static: true })
    private childComponant : LoginComponent;
    constructor() { }

    ngOnInit() {
        this.childComponant.fromParrentComponantClick();
    }
    userNameFromChild = "";
    userNameList : any;
    onLogin(user: string) {
        this.userNameFromChild = user;
    }
    OnLoginUsers(users: any) {
        this.userNameList = users;
    }
}