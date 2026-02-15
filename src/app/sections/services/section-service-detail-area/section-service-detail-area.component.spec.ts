import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServiceDetailAreaComponent } from './section-service-detail-area.component';

describe('SectionServiceDetailAreaComponent', () => {
  let component: SectionServiceDetailAreaComponent;
  let fixture: ComponentFixture<SectionServiceDetailAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectionServiceDetailAreaComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionServiceDetailAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
