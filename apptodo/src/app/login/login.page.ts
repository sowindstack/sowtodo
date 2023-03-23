import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user: any = {}
  constructor(private userApi:UsersService, private router:Router) { }

  ngOnInit(): void {
  }
login(){
  this.userApi.login(this.user).subscribe((result: any) => {
if(result.id){
this.router.navigate(['/tasks'])
}else{
  alert(result.message)
}
  })
}
}
