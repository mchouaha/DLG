import { AccordionAnswerComponent } from './../../layout/components/accordion-answer/accordion-answer.component';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HelpComponent } from './help.component';
import { AccordionIdComponent } from 'src/app/layout/components/accordion-id/accordion-id.component';
import { AccordionQuestionComponent } from 'src/app/layout/components/accordion-question/accordion-question.component';
import { AccordionIconComponent } from 'src/app/layout/components/accordion-icon/accordion-icon.component';
import { HorizontalLineComponent } from 'src/app/layout/components/horizontal-line/horizontal-line.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FaqsService } from 'src/app/services/faqs.service';

describe('HelpComponent', () => {
  let component: HelpComponent;
  let fixture: ComponentFixture<HelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
            HelpComponent,
            HorizontalLineComponent,
            AccordionIdComponent,
            AccordionQuestionComponent,
            AccordionIconComponent,
            AccordionAnswerComponent
        ],
        imports: [
            HttpClientTestingModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should return data from getFaqs `, async(inject([HttpTestingController, FaqsService],
    (httpClient: HttpTestingController, service: FaqsService) => {
      return service.getFaqs().subscribe(data => {
        expect([data].length).toBe(5);
      });
  })));

  it('should set isOpen & selectedId from eventEmitter', () => {
    const isOpenValue = true;
    const selectedIdValue = '1';

    const event = {isOpen: isOpenValue, selectedId: selectedIdValue};

    component.eventEmitter(event);
    fixture.detectChanges();

    expect(component.isOpen).toBe(isOpenValue);
    expect(component.selectedId).toBe(selectedIdValue);
  });
});
