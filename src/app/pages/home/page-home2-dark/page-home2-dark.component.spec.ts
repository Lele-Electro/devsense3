import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHome2DarkComponent } from './page-home2-dark.component';

describe('PageHome2DarkComponent', () => {
  let component: PageHome2DarkComponent;
  let fixture: ComponentFixture<PageHome2DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHome2DarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHome2DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
