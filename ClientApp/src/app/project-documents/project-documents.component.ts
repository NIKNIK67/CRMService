import { Component } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-documents',
  templateUrl: './project-documents.component.html',
  styleUrls: ['./project-documents.component.css']
})
export class ProjectDocumentsComponent {
  faFile = faFile
}
