import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCommentcellComponent } from './element-commentcell.component';

describe('ElementCommentcellComponent', () => {
  let component: ElementCommentcellComponent;
  let fixture: ComponentFixture<ElementCommentcellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementCommentcellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementCommentcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
