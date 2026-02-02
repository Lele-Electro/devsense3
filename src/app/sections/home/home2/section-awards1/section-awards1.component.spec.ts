import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAwards1Component } from './section-awards1.component';

describe('SectionAwards1Component', () => {
  let component: SectionAwards1Component;
  let fixture: ComponentFixture<SectionAwards1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectionAwards1Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionAwards1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
