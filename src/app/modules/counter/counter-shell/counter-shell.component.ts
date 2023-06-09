import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterStateService } from '../counter-state.service';

@Component({
  selector: 'app-counter-shell',
  templateUrl: './counter-shell.component.html',
  styleUrls: ['./counter-shell.component.scss'],
  host: { 'class': 'd-flex w-100 h-100' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterShellComponent {
  counter$: Observable<number> = this.counterState.count$

  constructor(
    private counterState: CounterStateService
  ) { }

  increment() {
    this.counterState.increment();
  }

  decrement() {
    this.counterState.decrement();
  }
}
