import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBrandingComponent } from './section-branding.component';

describe('SectionBrandingComponent', () => {
  let component: SectionBrandingComponent;
  let fixture: ComponentFixture<SectionBrandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectionBrandingComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
