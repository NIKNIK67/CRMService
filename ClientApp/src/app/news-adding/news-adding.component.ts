import { Component } from '@angular/core';
import { ApiService } from '../api/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-adding',
  templateUrl: './news-adding.component.html',
  styleUrls: ['./news-adding.component.css']
})
export class NewsAddingComponent {
  public header: string = ""
  public content: string = ""
  public isErrorVisible = false
  constructor(private api: ApiService, private router: Router) {

  }
  send(): void
  {
    this.api.apiCreateAnoumentPost({ header: this.header, content: this.content }).subscribe(x => {
      this.isErrorVisible = false;
      this.router.navigate(['/dashboard'])
    }, error => {
      this.isErrorVisible = true;
    })
  }
}
