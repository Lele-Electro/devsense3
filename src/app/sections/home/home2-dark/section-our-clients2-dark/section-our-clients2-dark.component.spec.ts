import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOurClients2DarkComponent } from './section-our-clients2-dark.component';

describe('SectionOurClients2DarkComponent', () => {
  let component: SectionOurClients2DarkComponent;
  let fixture: ComponentFixture<SectionOurClients2DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOurClients2DarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionOurClients2DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
