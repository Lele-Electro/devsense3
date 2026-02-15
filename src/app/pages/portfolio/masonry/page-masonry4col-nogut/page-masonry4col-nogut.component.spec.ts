import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMasonry4colNogutComponent } from './page-masonry4col-nogut.component';

describe('PageMasonry4colNogutComponent', () => {
  let component: PageMasonry4colNogutComponent;
  let fixture: ComponentFixture<PageMasonry4colNogutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageMasonry4colNogutComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageMasonry4colNogutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
