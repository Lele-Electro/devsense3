import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGrid4colNogutComponent } from './page-grid4col-nogut.component';

describe('PageGrid4colNogutComponent', () => {
  let component: PageGrid4colNogutComponent;
  let fixture: ComponentFixture<PageGrid4colNogutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGrid4colNogutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGrid4colNogutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
