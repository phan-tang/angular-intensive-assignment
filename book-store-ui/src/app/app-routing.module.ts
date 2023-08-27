import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './shared/layout/admin-layout/admin-layout.component';
import { PageNotFoundComponent } from './shared/layout/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app/books',
    pathMatch: 'full'
  },
  {
    path: 'app',
    component: MainLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'books',
        loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'customers',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
      },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    // canActivate: [RoleGuard],
    children: [
      {
        path: '',
        redirectTo: '/admin/books',
        pathMatch: 'full'
      },
      {
        path: 'books',
        loadChildren: () => import('./admin/admin-books/admin-books.module').then(m => m.AdminBooksModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./admin/admin-users/admin-users.module').then(m => m.AdminUsersModule)
      },
      {
        path: 'authors',
        loadChildren: () => import('./admin/admin-authors/admin-authors.module').then(m => m.AdminAuthorsModule)
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
