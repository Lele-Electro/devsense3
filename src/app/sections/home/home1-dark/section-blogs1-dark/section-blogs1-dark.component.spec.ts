import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogs1DarkComponent } from './section-blogs1-dark.component';

describe('SectionBlogs1DarkComponent', () => {
  let component: SectionBlogs1DarkComponent;
  let fixture: ComponentFixture<SectionBlogs1DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SectionBlogs1DarkComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionBlogs1DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
