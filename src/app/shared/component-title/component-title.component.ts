import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-title',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="component-title">
    <h3 class="text-primary">
      <i *ngIf="icon" class="me-1 p-2 rounded-3 bg-secondary {{ icon }}"></i
      >{{ title }}
    </h3>
    <hr />
  </div>`,
  styleUrls: ['./component-title.component.scss'],
})
export class ComponentTitleComponent {
  @Input() title = '';
  @Input() icon = '';

  constructor() {}
}
