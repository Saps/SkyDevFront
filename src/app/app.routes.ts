import { Layout } from '@app/main/layout/layout';

export const routes = [
  {
    path: 'main',
    data: { breadcrumb: { skip: true } },
    component: Layout,
    children: [
      {
        path: 'home',
        data: { breadcrumb: { label: 'Вакансии' } },
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadComponent: () => import('@app/main/home/home'),
          },
          {
            path: ':id',
            data: { breadcrumb: { label: 'Кандидаты' } },
            loadComponent: () => import('@app/main/home/candidates/candidates'),
          },
        ],
      },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ],
  },
  { path: '**', redirectTo: '/main/home' },
] satisfies import('@angular/router').Routes;
