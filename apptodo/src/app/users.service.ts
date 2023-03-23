import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient ) { }

create(data: any){
  return this.http.post("http://localhost:3001/users", data)
}
read(){
  return this.http.get("http://localhost:3001/users")
}
update(data: any, id: number){
  return this.http.patch("http://localhost:3001/users/"+id, data)

}
delete(id: number){
    return this.http.delete("http://localhost:3001/users/"+id)
}
login(data: any){
  return this.http.post("http://localhost:3001/users/login", data)
}


}

