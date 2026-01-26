import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServiceDetailComponent } from './page-service-detail.component';

describe('PageServiceDetailComponent', () => {
  let component: PageServiceDetailComponent;
  let fixture: ComponentFixture<PageServiceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageServiceDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
