import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureStoriesComponent } from './feature-stories.component';

describe('FeatureStoriesComponent', () => {
  let component: FeatureStoriesComponent;
  let fixture: ComponentFixture<FeatureStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
