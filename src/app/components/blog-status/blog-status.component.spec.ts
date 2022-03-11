import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStatusComponent } from './blog-status.component';

describe('BlogStatusComponent', () => {
  let component: BlogStatusComponent;
  let fixture: ComponentFixture<BlogStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
