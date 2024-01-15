import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUserAccessManagementComponent } from './project-user-access-management.component';

describe('ProjectUserAccessManagementComponent', () => {
  let component: ProjectUserAccessManagementComponent;
  let fixture: ComponentFixture<ProjectUserAccessManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectUserAccessManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectUserAccessManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
