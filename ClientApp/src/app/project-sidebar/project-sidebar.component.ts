import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faFile, faHouse, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-sidebar',
  templateUrl: './project-sidebar.component.html',
  styleUrls: ['./project-sidebar.component.css']
})
export class ProjectSidebarComponent {
  faHouse = faHouse
  faUsers = faUsers
  faFile = faFile
  @Input() doDisplayMainPage: boolean = false
  @Input() doDisplayDocumentPage: boolean = false
  @Input() doDisplayMemberPage: boolean = false
  @Output() doDisplayMainPageChange = new EventEmitter<boolean>();
  @Output() doDisplayDocumentPageChange = new EventEmitter<boolean>();
  @Output() doDisplayMemberPageChange = new EventEmitter<boolean>();
  public openMemberPage(): void{
   
    this.doDisplayDocumentPage = false
    this.doDisplayMainPage = false
    this.doDisplayMemberPage = true
    this.doDisplayDocumentPageChange.emit(this.doDisplayDocumentPage)
    this.doDisplayMainPageChange.emit(this.doDisplayMainPage)
    this.doDisplayMemberPageChange.emit(this.doDisplayMemberPage)

  }
  public openDocumentsPage(): void {
    
    this.doDisplayDocumentPage = true
    this.doDisplayMainPage = false
    this.doDisplayMemberPage = false
    this.doDisplayDocumentPageChange.emit(this.doDisplayDocumentPage)
    this.doDisplayMainPageChange.emit(this.doDisplayMainPage)
    this.doDisplayMemberPageChange.emit(this.doDisplayMemberPage)
  }

  public openMainPage(): void {
    
    this.doDisplayDocumentPage = false
    this.doDisplayMainPage = true
    this.doDisplayMemberPage = false
    this.doDisplayDocumentPageChange.emit(this.doDisplayDocumentPage)
    this.doDisplayMainPageChange.emit(this.doDisplayMainPage)
    this.doDisplayMemberPageChange.emit(this.doDisplayMemberPage)
  }
}
