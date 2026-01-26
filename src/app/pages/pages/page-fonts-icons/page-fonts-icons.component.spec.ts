import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFontsIconsComponent } from './page-fonts-icons.component';

describe('PageFontsIconsComponent', () => {
  let component: PageFontsIconsComponent;
  let fixture: ComponentFixture<PageFontsIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFontsIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFontsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
