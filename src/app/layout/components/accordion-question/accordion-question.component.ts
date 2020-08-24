import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-question',
  templateUrl: './accordion-question.component.html',
  styleUrls: ['./accordion-question.component.scss']
})
export class AccordionQuestionComponent {

  @Input() question: string;

}
