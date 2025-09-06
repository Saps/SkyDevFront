import { Layout } from '@app/main/layout/layout';

export const routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'home', loadComponent: () => import('@app/main/home/home') },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ],
  },
  { path: '**', redirectTo: '/home' },
] satisfies import('@angular/router').Routes;
