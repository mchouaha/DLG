import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-id',
  templateUrl: './accordion-id.component.html',
  styleUrls: ['./accordion-id.component.scss']
})
export class AccordionIdComponent {

  @Input() id: string;
}
