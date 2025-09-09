import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Common } from '@app/services';
import { BaseChartDirective } from 'ng2-charts';

type TChart = { chartData: { datasets: any[]; labels: string[] }; chartOptions: any };

@Component({
  selector: 'app-stat-params',
  imports: [BaseChartDirective],
  templateUrl: './stat-params.html',
  host: { style: 'display: block; width: 100%; height: 30rem;' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StatParams implements OnInit {
  readonly statParams = signal<TChart | null>(null);
  private readonly common = inject(Common);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.common.statParam()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        this.statParams.set({
          chartData: {
            datasets: [{
              borderColor: '#bd7ebe',
              borderWidth: 2,
              data: res.results.map(({ value }) => value),
              pointBackgroundColor: '#fff',
              pointBorderColor: '#bd7ebe',
            }],
            labels: res.results.map(({ caption }) => caption),
          },
          chartOptions: {
            elements: { point: { pointBorderWidth: 1, pointHoverRadius: 6, pointRadius: 4 } },
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                callbacks: { label: (ctx: { raw: string }) => ctx.raw, title: () => '' },
                caretPadding: 8,
                displayColors: false,
                yAlign: 'bottom',
              },
            },
            responsive: true,
            scales: { r: { angleLines: { display: true }, ticks: { beginAtZero: true } }  }
          },
        });
      });
  }
}
