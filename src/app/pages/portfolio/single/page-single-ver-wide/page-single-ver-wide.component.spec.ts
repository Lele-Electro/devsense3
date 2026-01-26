import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSingleVerWideComponent } from './page-single-ver-wide.component';

describe('PageSingleVerWideComponent', () => {
  let component: PageSingleVerWideComponent;
  let fixture: ComponentFixture<PageSingleVerWideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSingleVerWideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSingleVerWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
