import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGrid2colComponent } from './page-grid2col.component';

describe('PageGrid2colComponent', () => {
  let component: PageGrid2colComponent;
  let fixture: ComponentFixture<PageGrid2colComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGrid2colComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGrid2colComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
