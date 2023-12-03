import { Component, Inject } from '@angular/core';
import { ApiService } from '../api/services';
import { AnnoucementObject } from '../api/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-editing',
  templateUrl: './news-editing.component.html',
  styleUrls: ['./news-editing.component.css']
})
export class NewsEditingComponent {
  public header: string = ""
  public content: string = ""
  public id: number = -1
  public requestedToEdit: AnnoucementObject = {}
  isErrorVisible: boolean = false;
  constructor(private api: ApiService, private router: Router, @Inject(ActivatedRoute) private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id']
  }
  send() {
    this.api.apiEditAnnoucementPut({ annoucementid:this.id, header: this.header, content: this.content }).subscribe(x => {
      this.isErrorVisible = false;
      this.router.navigate(['/dashboard'])
    }, error => {
      this.isErrorVisible = true;
    })
  }
}
