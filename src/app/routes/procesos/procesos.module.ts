import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProcesosComponent } from './procesos.component';

const routes: Routes = [
  { path: '', component: ProcesosComponent },
];

@NgModule({
  declarations: [ProcesosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ProcesosModule { }
