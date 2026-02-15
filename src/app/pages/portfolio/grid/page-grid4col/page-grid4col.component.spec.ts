import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGrid4colComponent } from './page-grid4col.component';

describe('PageGrid4colComponent', () => {
  let component: PageGrid4colComponent;
  let fixture: ComponentFixture<PageGrid4colComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageGrid4colComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageGrid4colComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
