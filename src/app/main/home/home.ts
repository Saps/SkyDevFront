import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IVacancy } from '@app/models';
import { Common } from '@app/services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Home implements OnInit {
  readonly loader = signal(true);
  readonly vacancies = signal<IVacancy[]>([]);
  private readonly common = inject(Common);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.common.load()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => this.vacancies.set(res));
  }
}
