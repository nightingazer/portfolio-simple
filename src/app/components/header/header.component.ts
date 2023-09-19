import { Component, HostListener, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  collapseHeader = signal(false);
  showMenu = signal(false);

  constructor() {
    effect(() => console.log(this.collapseHeader()));
  }

  ngOnInit() {
    this.collapseHeader.set(window.innerWidth < 768);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.collapseHeader.set(event.target.innerWidth < 768);
    if (this.collapseHeader()) {
      this.showMenu.set(false);
    }
  }

  toggleMenu() {
    this.showMenu.update(v => !v)
  }
}
