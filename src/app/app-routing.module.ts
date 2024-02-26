import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'nav', loadChildren: () => import('src/app/shared/components/nav/nav.module').then((m) => m.NavModule) },
  { path: '**', redirectTo: 'nav', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
