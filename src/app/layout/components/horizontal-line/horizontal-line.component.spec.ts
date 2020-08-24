import { style } from '@angular/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalLineComponent } from './horizontal-line.component';
import { By } from '@angular/platform-browser';

describe('HorizontalLineComponent', () => {
  let component: HorizontalLineComponent;
  let fixture: ComponentFixture<HorizontalLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass height from @input to div', () => {
    const height = '40px';
    component.height = height;
    const div = fixture.debugElement.nativeElement.querySelector('.horizontal-line');
    fixture.detectChanges();
    expect(div.style.height).toBe(height);
  });
});
