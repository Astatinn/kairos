import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { NgOptimizedImage } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';

@Component({
  standalone: true,
  selector: 'krs-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrl: './main-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MenubarModule, NgOptimizedImage, AvatarModule],
  encapsulation: ViewEncapsulation.Emulated
})
export class MainNavigationComponent {
  @Input() public menu: MenuItem[] = [];
  @Input() public applicationName = 'Kairos';
}
