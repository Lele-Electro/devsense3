import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOurProcessComponent } from './page-our-process.component';

describe('PageOurProcessComponent', () => {
  let component: PageOurProcessComponent;
  let fixture: ComponentFixture<PageOurProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageOurProcessComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageOurProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
