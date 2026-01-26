import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSingleVerFloatingComponent } from './page-single-ver-floating.component';

describe('PageSingleVerFloatingComponent', () => {
  let component: PageSingleVerFloatingComponent;
  let fixture: ComponentFixture<PageSingleVerFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSingleVerFloatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSingleVerFloatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
