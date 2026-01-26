import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGrid3colNogutComponent } from './page-grid3col-nogut.component';

describe('PageGrid3colNogutComponent', () => {
  let component: PageGrid3colNogutComponent;
  let fixture: ComponentFixture<PageGrid3colNogutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGrid3colNogutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGrid3colNogutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
