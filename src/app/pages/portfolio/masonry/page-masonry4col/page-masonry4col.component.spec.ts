import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMasonry4colComponent } from './page-masonry4col.component';

describe('PageMasonry4colComponent', () => {
  let component: PageMasonry4colComponent;
  let fixture: ComponentFixture<PageMasonry4colComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMasonry4colComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMasonry4colComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
