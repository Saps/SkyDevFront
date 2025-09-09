import { Component, DestroyRef, inject, Input, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Breadcrumb } from '@app/components';
import { ICandidate } from '@app/models';
import { Common } from '@app/services';

const isHigh = (score: number) => score >= 90;
const isMid = (score: number) => score >= 80 && score < 90;

@Component({
  selector: 'app-candidates',
  imports: [Breadcrumb],
  templateUrl: './candidates.html',
  styleUrl: './candidates.scss',
})
export default class Candidates implements OnInit {
  @Input() id = '';
  readonly candidates = signal<ICandidate[]>([]);
  readonly isHigh = isHigh;
  readonly isMid = isMid;
  readonly loader = signal(true);
  readonly photo = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face';
  private readonly common = inject(Common);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.common.loadById(this.id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => this.candidates.set(res));
  }
}
