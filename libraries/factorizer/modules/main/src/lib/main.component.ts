import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavigationComponent, StatusBarComponent } from '@components';
import { MenuItem } from 'primeng/api';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, MainNavigationComponent, StatusBarComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  public readonly menu: MenuItem[] = [
    { label: 'UniForge', icon: 'ri ri-magic-line'  },
    { label: 'Service Catalog', icon: 'ri ri-stack-line' },
    { label: 'Tribe Map', icon: 'ri ri-group-2-line' },
  ]
}
