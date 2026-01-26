import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGrid5colComponent } from './page-grid5col.component';

describe('PageGrid5colComponent', () => {
  let component: PageGrid5colComponent;
  let fixture: ComponentFixture<PageGrid5colComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGrid5colComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGrid5colComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
