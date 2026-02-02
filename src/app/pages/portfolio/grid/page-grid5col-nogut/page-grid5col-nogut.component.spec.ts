import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGrid5colNogutComponent } from './page-grid5col-nogut.component';

describe('PageGrid5colNogutComponent', () => {
  let component: PageGrid5colNogutComponent;
  let fixture: ComponentFixture<PageGrid5colNogutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageGrid5colNogutComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageGrid5colNogutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
