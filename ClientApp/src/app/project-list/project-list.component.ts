import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  search: string = "";
  constructor(private router: Router) {

  }
  public redirectToProjectCreation(): void {
    this.router.navigate(['/project-create']);
  }
}
