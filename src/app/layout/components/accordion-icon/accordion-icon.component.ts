import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-icon',
  templateUrl: './accordion-icon.component.html',
  styleUrls: ['./accordion-icon.component.scss']
})
export class AccordionIconComponent implements OnInit {

  isOpen: boolean;
  @Output() eventEmitter = new EventEmitter<object>();
  @Input() selectedId: string;
  @Input() previousSelectedId: string;

  ngOnInit(): void {
    this.isOpen = false;
    this.previousSelectedId = null;
  }

  rotate(): void {
    this.previousSelectedId !== this.selectedId ? this.isOpen = true : this.isOpen = !this.isOpen;

    this.eventEmitter.emit({selectedId: this.selectedId, isOpen: this.isOpen});
  }
}
