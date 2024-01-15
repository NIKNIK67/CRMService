import { Component } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-document-management',
  templateUrl: './document-management.component.html',
  styleUrls: ['./document-management.component.css']
})
export class DocumentManagementComponent {
  faFile = faFile
}
