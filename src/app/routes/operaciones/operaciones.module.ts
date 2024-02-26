import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OperacionesComponent } from './operaciones.component';

const routes: Routes = [
  { path: '', component: OperacionesComponent },
];

@NgModule({
  declarations: [OperacionesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class OperacionesModule { }
