import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMembersManagementComponent } from './project-membersmanagement.component';

describe('ProjectMembersmanagementComponent', () => {
  let component: ProjectMembersManagementComponent;
  let fixture: ComponentFixture<ProjectMembersManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMembersManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectMembersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
