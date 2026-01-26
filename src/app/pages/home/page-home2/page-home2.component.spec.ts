import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHome2Component } from './page-home2.component';

describe('PageHome2Component', () => {
  let component: PageHome2Component;
  let fixture: ComponentFixture<PageHome2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHome2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
