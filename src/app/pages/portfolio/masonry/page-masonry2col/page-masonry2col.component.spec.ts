import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMasonry2colComponent } from './page-masonry2col.component';

describe('PageMasonry2colComponent', () => {
  let component: PageMasonry2colComponent;
  let fixture: ComponentFixture<PageMasonry2colComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMasonry2colComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMasonry2colComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
