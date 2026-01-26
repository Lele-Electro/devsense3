import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCarouselFullwidthComponent } from './page-carousel-fullwidth.component';

describe('PageCarouselFullwidthComponent', () => {
  let component: PageCarouselFullwidthComponent;
  let fixture: ComponentFixture<PageCarouselFullwidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCarouselFullwidthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCarouselFullwidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
