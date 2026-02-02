import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOurServices2Component } from './section-our-services2.component';

describe('SectionOurServices2Component', () => {
  let component: SectionOurServices2Component;
  let fixture: ComponentFixture<SectionOurServices2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectionOurServices2Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionOurServices2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
