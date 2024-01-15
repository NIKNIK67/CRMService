import { Component } from '@angular/core';
import { faFile, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-mainpage',
  templateUrl: './project-mainpage.component.html',
  styleUrls: ['./project-mainpage.component.css']
})
export class ProjectMainpageComponent {
  faUser = faUser
  faFile = faFile
}
