import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMasonry5colNogutComponent } from './page-masonry5col-nogut.component';

describe('PageMasonry5colNogutComponent', () => {
  let component: PageMasonry5colNogutComponent;
  let fixture: ComponentFixture<PageMasonry5colNogutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMasonry5colNogutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMasonry5colNogutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
