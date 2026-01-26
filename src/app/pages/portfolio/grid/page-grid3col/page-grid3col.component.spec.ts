import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGrid3colComponent } from './page-grid3col.component';

describe('PageGrid3colComponent', () => {
  let component: PageGrid3colComponent;
  let fixture: ComponentFixture<PageGrid3colComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGrid3colComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGrid3colComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
