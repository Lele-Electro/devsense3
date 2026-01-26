import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogs2DarkComponent } from './section-blogs2-dark.component';

describe('SectionBlogs2DarkComponent', () => {
  let component: SectionBlogs2DarkComponent;
  let fixture: ComponentFixture<SectionBlogs2DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogs2DarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBlogs2DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
