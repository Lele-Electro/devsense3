import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAwardsComponent } from './section-awards.component';

describe('SectionAwardsComponent', () => {
  let component: SectionAwardsComponent;
  let fixture: ComponentFixture<SectionAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAwardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
