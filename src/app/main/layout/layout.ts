import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIcon } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [MatIcon, RouterLink, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  readonly activeIndex = signal(-1);
  readonly isCollapsed = signal(false);
  readonly sbItems = [
    { icon: 'home', label: 'Главная', link: '/home' },
  ];

  private readonly $ = inject(Router).events.pipe(takeUntilDestroyed()).subscribe((res) => {
    if (!(res instanceof NavigationEnd)) return;
    this.activeIndex.set(this.sbItems.findIndex(({ link }) => res.urlAfterRedirects.includes(link)));
  });
}
