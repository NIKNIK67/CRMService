import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router'

@Component({
  selector: 'app-project-membersmanagement',
  templateUrl: './project-membersmanagement.component.html',
  styleUrls: ['./project-membersmanagement.component.css']
})
export class ProjectMembersManagementComponent {

  faUser = faUser
  constructor(private router: Router) {

  }
  public redirectToManage(prjId: number, usrId: number): void {
    console.log(1)
    this.router.navigate(['/project-user-access',prjId, usrId]);
  }
}
