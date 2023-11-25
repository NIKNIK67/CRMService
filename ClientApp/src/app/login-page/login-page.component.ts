import { Component } from '@angular/core';
import { ApiService } from '../api/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  email: string = ""
  password: string = ""
  isVisible: boolean = false

  constructor(private api: ApiService, private router: Router) {
  }

  sendRequest(): void {
    this.api.apiLoginGet({ email: this.email, password: this.password }).subscribe(x => {
      this.isVisible = false;
      localStorage.setItem("jwt", JSON.parse((<any>x)).token);
      this.router.navigate([''])
    }, error => {
      this.isVisible = true;
    })
  }
}
