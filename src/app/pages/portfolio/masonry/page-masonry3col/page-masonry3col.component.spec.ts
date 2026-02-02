import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMasonry3colComponent } from './page-masonry3col.component';

describe('PageMasonry3colComponent', () => {
  let component: PageMasonry3colComponent;
  let fixture: ComponentFixture<PageMasonry3colComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageMasonry3colComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageMasonry3colComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
