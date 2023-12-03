import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEditingComponent } from './news-editing.component';

describe('NewsEditingComponent', () => {
  let component: NewsEditingComponent;
  let fixture: ComponentFixture<NewsEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
