import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAddingComponent } from './news-adding.component';

describe('NewsAddingComponent', () => {
  let component: NewsAddingComponent;
  let fixture: ComponentFixture<NewsAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsAddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
