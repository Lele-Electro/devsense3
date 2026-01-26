import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header2DarkComponent } from './header2-dark.component';

describe('Header2DarkComponent', () => {
  let component: Header2DarkComponent;
  let fixture: ComponentFixture<Header2DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Header2DarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header2DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
