import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCarouselLargeComponent } from './page-carousel-large.component';

describe('PageCarouselLargeComponent', () => {
  let component: PageCarouselLargeComponent;
  let fixture: ComponentFixture<PageCarouselLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageCarouselLargeComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageCarouselLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
