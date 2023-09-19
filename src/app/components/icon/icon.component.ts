import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  iconSignal = signal('');

  @Input({ required: true }) set icon(value: string) {
    this.iconSignal.set(value);
  }

  iconPath = computed(() => `assets/img/icons.svg#${this.iconSignal()}`)
}
