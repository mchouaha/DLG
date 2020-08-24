import { ComponentsModule } from './../layout/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [HelpComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [HelpComponent]
})
export class MainModule { }
