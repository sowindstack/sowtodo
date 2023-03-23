import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private userApi:UsersService ) { }

  ngOnInit(): void {
this.getUsersList()
  }
getUsersList(){
  this.userApi.read().subscribe((result) =>{
    alert(JSON.stringify(result))
  })
}
}
