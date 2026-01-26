import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMasonry5colComponent } from './page-masonry5col.component';

describe('PageMasonry5colComponent', () => {
  let component: PageMasonry5colComponent;
  let fixture: ComponentFixture<PageMasonry5colComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMasonry5colComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMasonry5colComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
