import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGrid2colNogutComponent } from './page-grid2col-nogut.component';

describe('PageGrid2colNogutComponent', () => {
  let component: PageGrid2colNogutComponent;
  let fixture: ComponentFixture<PageGrid2colNogutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageGrid2colNogutComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageGrid2colNogutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
