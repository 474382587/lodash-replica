import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:string[]
  constructor() {
    this.userList = ['Joseph', 'Tom', 'Mac']
   }

  ngOnInit() {
  }

}
