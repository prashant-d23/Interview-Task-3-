import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  userObj = new Details();


  constructor(private http:SharedService, private router:Router){}

  credentials:any;
  ngOnInit() {
    this.http.getData("credentials").subscribe((res:any)=>{
      // console.log(res,res[0],res[0].email)
      this.credentials = res
    })
  }



login(){
  const matchUser = this.credentials.find((user:any)=>{
    // user.email == this.userObj.email && user.password == this.userObj.password
    return (user.email === this.userObj.email) && (user.password === this.userObj.password);
  })
  if (matchUser) {
    alert("success");
    this.router.navigate(['/dashboard']);
  } else {
    alert("wrong");
  }
}

}
class Details{
  email?:string;
  password?:string;
}
