import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NoAuthGuard } from './core/auth/guards/noAuth.guard';

export const appRoutes: Routes = [
  // Landing routes
  {
    path: '',
    loadChildren: () => import('./modules/landing/home/home.routes'),
  },
  {
    path: '',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: 'confirmation-required',
        loadChildren: () =>
          import(
            'app/modules/auth/confirmation-required/confirmation-required.routes'
          ),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('app/modules/auth/forgot-password/forgot-password.routes'),
      },
      {
        path: 'reset-password',
        loadChildren: () =>
          import('app/modules/auth/reset-password/reset-password.routes'),
      },
      {
        path: 'sign-in',
        loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes'),
      },
      {
        path: 'sign-up',
        loadChildren: () => import('app/modules/auth/sign-up/sign-up.routes'),
      },
    ],
  },

  // {
  //   path: '',
  //   component: LayoutComponent,
  //   data: {
  //     layout: 'empty',
  //   },
  //   children: [
  //     {
  //       path: 'home',
  //       loadChildren: () => import('./modules/landing/home/home.routes'),
  //     },
  //   ],
  // },
];
