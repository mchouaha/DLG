import { style } from '@angular/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionIconComponent } from './accordion-icon.component';

describe('AccordionIconComponent', () => {
  let component: AccordionIconComponent;
  let fixture: ComponentFixture<AccordionIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should rotate icon by 90deg', () => {
    component.previousSelectedId = '1';
    component.selectedId = '1';
    component.isOpen = true;
    component.rotate();
    fixture.detectChanges();

    const svg = fixture.debugElement.nativeElement.querySelector('svg');
    fixture.detectChanges();
    expect(svg.style.transform).toBe('rotate(90deg)');

  });

  it('should rotate icon by 45deg', () => {
    component.previousSelectedId = '1';
    component.selectedId = '1';
    component.isOpen = false;
    component.rotate();
    fixture.detectChanges();

    const svg = fixture.debugElement.nativeElement.querySelector('svg');
    fixture.detectChanges();
    expect(svg.style.transform).toBe('rotate(45deg)');

  });
});
