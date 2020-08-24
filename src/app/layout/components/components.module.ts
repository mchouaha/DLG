import { HorizontalLineComponent } from './horizontal-line/horizontal-line.component';
import { AccordionQuestionComponent } from './accordion-question/accordion-question.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionIdComponent } from './accordion-id/accordion-id.component';
import { AccordionAnswerComponent } from './accordion-answer/accordion-answer.component';
import { AccordionIconComponent } from './accordion-icon/accordion-icon.component';

@NgModule({
  declarations: [
    AccordionIdComponent,
    AccordionQuestionComponent,
    AccordionAnswerComponent,
    AccordionIconComponent,
    HorizontalLineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionIdComponent,
    AccordionQuestionComponent,
    AccordionAnswerComponent,
    AccordionIconComponent,
    HorizontalLineComponent
  ]
})
export class ComponentsModule { }
