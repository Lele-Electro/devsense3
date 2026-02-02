import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSingleVerWideVideoComponent } from './page-single-ver-wide-video.component';

describe('PageSingleVerWideVideoComponent', () => {
  let component: PageSingleVerWideVideoComponent;
  let fixture: ComponentFixture<PageSingleVerWideVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageSingleVerWideVideoComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageSingleVerWideVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
