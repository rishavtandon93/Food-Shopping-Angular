import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    DropDownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DropDownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    CommonModule,
  ],
  entryComponents: [AlertComponent]
})
export class SharedModule {}
