import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      { path: 'perfil', loadChildren: () => import('src/app/routes/perfil/perfil.module').then((m) => m.PerfilModule) },
      { path: 'noticias', loadChildren: () => import('src/app/routes/noticias/noticias.module').then((m) => m.NoticiasModule) },
      { path: 'operaciones', loadChildren: () => import('src/app/routes/operaciones/operaciones.module').then((m) => m.OperacionesModule) },
      { path: 'procesos', loadChildren: () => import('src/app/routes/procesos/procesos.module').then((m) => m.ProcesosModule) },
      { path: 'registros', loadChildren: () => import('src/app/routes/registros/registros.module').then((m) => m.RegistrosModule) },
      { path: '**', redirectTo: 'perfil', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class NavModule { }
