import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'krs-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrl: './status-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
  encapsulation: ViewEncapsulation.Emulated
})
export class StatusBarComponent {
  public DATE = new Date();
}
