import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header1DarkComponent } from './header1-dark.component';

describe('Header1DarkComponent', () => {
  let component: Header1DarkComponent;
  let fixture: ComponentFixture<Header1DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [Header1DarkComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(Header1DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
