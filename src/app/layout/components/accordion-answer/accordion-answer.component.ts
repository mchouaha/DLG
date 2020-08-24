import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-answer',
  templateUrl: './accordion-answer.component.html',
  styleUrls: ['./accordion-answer.component.scss']
})
export class AccordionAnswerComponent {
  @Input() answer: string;
}
