import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMainpageComponent } from './project-mainpage.component';

describe('ProjectMainpageComponent', () => {
  let component: ProjectMainpageComponent;
  let fixture: ComponentFixture<ProjectMainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMainpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
