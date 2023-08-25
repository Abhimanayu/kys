import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () =>
      import('./layout/books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'plans',
    loadChildren: () =>
      import('./layout/plans/plans.module').then((m) => m.PlansModule),
  },
  {
    path: 'subscriber',
    loadChildren: () =>
      import('./layout/subscriber/subscriber.module').then(
        (m) => m.SubscriberModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
