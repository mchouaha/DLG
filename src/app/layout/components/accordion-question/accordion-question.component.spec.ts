import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionQuestionComponent } from './accordion-question.component';

describe('AccordionQuestionComponent', () => {
  let component: AccordionQuestionComponent;
  let fixture: ComponentFixture<AccordionQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass question from @input to paragraph', () => {
    const question = 'What vehicles are covered?';
    component.question = question;
    const p = fixture.debugElement.nativeElement.querySelector('p');
    fixture.detectChanges();
    expect(p.innerHTML).toBe(question);
  });
});
