import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServices1Component } from './page-services1.component';

describe('PageServices1Component', () => {
  let component: PageServices1Component;
  let fixture: ComponentFixture<PageServices1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageServices1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageServices1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
