import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMasonry2colNogutComponent } from './page-masonry2col-nogut.component';

describe('PageMasonry2colNogutComponent', () => {
  let component: PageMasonry2colNogutComponent;
  let fixture: ComponentFixture<PageMasonry2colNogutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageMasonry2colNogutComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageMasonry2colNogutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
