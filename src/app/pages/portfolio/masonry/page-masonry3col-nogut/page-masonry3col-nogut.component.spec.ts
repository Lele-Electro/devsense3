import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMasonry3colNogutComponent } from './page-masonry3col-nogut.component';

describe('PageMasonry3colNogutComponent', () => {
  let component: PageMasonry3colNogutComponent;
  let fixture: ComponentFixture<PageMasonry3colNogutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageMasonry3colNogutComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageMasonry3colNogutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
