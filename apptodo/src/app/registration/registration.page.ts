import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {


  user : any = {}
  constructor(private userApi: UsersService, private router: Router) { }

  ngOnInit() {
  }
register(){
  this.userApi.create(this.user).subscribe((result)=> {
  alert("register successful" + JSON.stringify(result))
  this.router.navigate(['/login'])

})
}

}
