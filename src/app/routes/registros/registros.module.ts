import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrosComponent } from './registros.component';

const routes: Routes = [
  { path: '', component: RegistrosComponent },
];

@NgModule({
  declarations: [RegistrosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class RegistrosModule { }
