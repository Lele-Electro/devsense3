import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServicesSidebarComponent } from './section-services-sidebar.component';

describe('SectionServicesSidebarComponent', () => {
  let component: SectionServicesSidebarComponent;
  let fixture: ComponentFixture<SectionServicesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectionServicesSidebarComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionServicesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
