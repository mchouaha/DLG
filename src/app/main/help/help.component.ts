import { FaqsService } from './../../services/faqs.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        visibility: 'visible',
        backgroundColor: 'white'
      })),
      state('closed', style({
        visibility: 'hidden',
        height: '0px',
        overflowY: 'hidden'
      })),
      transition('open => closed', [
        animate('400ms')
      ]),
      transition('closed => open', [
        animate('400ms')
      ])
    ]),
  ],
})
export class HelpComponent implements OnInit {

  isOpen: boolean;
  selectedId: string;
  faqs: object;

  constructor(private faqsService: FaqsService) { }

  ngOnInit(): void {
    this.getFaqs();
  }

  eventEmitter(event: object): void {
    const isOpenKey = 'isOpen';
    const selectedIdKey = 'selectedId';

    this.isOpen = event[isOpenKey];
    this.selectedId = event[selectedIdKey];
  }

  getFaqs(): void {
    this.faqsService.getFaqs().subscribe(data => {
      this.faqs = data;
    });
  }
}
