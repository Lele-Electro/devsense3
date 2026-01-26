import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHome1DarkComponent } from './page-home1-dark.component';

describe('PageHome1DarkComponent', () => {
  let component: PageHome1DarkComponent;
  let fixture: ComponentFixture<PageHome1DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHome1DarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHome1DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
