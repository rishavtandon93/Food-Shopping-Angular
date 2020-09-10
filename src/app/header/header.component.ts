import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSeleceted = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSeleceted.emit(feature);
  }
}
