import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCarouselSmallComponent } from './page-carousel-small.component';

describe('PageCarouselSmallComponent', () => {
  let component: PageCarouselSmallComponent;
  let fixture: ComponentFixture<PageCarouselSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageCarouselSmallComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageCarouselSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
