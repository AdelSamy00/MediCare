import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then((c) => c.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then((c) => c.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./components/register/register.component').then((c) => c.RegisterComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact-us/contact-us.component').then((c) => c.ContactUsComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./components/notfound/notfound.component').then((c) => c.NotfoundComponent)
  }
];
