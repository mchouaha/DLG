import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionIdComponent } from './accordion-id.component';

describe('AccordionIdComponent', () => {
  let component: AccordionIdComponent;
  let fixture: ComponentFixture<AccordionIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass question id from @input to span', () => {
    const id = '1';
    component.id = id;
    const p = fixture.debugElement.nativeElement.querySelector('span');
    fixture.detectChanges();
    expect(p.innerHTML).toBe('Q' + id);
  });
});
