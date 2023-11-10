import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string =""
  password: string = ""
  sendRequest(): void {
    console.log(this.email+"\n"+this.password)
  }
}