import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServices2Component } from './page-services2.component';

describe('PageServices2Component', () => {
  let component: PageServices2Component;
  let fixture: ComponentFixture<PageServices2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageServices2Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageServices2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
