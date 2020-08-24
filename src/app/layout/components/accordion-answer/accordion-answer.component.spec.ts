import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAnswerComponent } from './accordion-answer.component';

describe('AccordionAnswerComponent', () => {
  let component: AccordionAnswerComponent;
  let fixture: ComponentFixture<AccordionAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass answer from @input to p', () => {
    const answer = 'Lorem ipsum dolor sit amet';
    component.answer = answer;
    const p = fixture.debugElement.nativeElement.querySelector('p');
    fixture.detectChanges();
    expect(p.innerHTML).toBe(answer);
  });

});
