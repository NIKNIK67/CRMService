import { Component, ViewChild } from '@angular/core';
import { ProjectMainpageComponent } from '../project-mainpage/project-mainpage.component';
import { ProjectDocumentsComponent } from '../project-documents/project-documents.component';
import { ProjectSidebarComponent } from '../project-sidebar/project-sidebar.component';
import { ProjectMembersManagementComponent } from '../project-membersmanagement/project-membersmanagement.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  @ViewChild(ProjectMainpageComponent, { static: false })
  private mainPageChild: ProjectMainpageComponent | undefined
  @ViewChild(ProjectDocumentsComponent, { static: false })
  private documentPageChild: ProjectDocumentsComponent | undefined;
  @ViewChild(ProjectSidebarComponent, { static: false })
  private sidebarPageChild: ProjectSidebarComponent | undefined;
  @ViewChild(ProjectMembersManagementComponent, { static: false })
  private membersPageChild: ProjectMembersManagementComponent | undefined;
  public doDisplayMainPage: boolean = true
  public doDisplayMemberPage: boolean = false
  public doDisplayDocumentPage: boolean = false

}
