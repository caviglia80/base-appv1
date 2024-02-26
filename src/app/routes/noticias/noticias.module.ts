import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './noticias.component';


const routes: Routes = [
  { path: '', component: NoticiasComponent },
];

@NgModule({
  declarations: [NoticiasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class NoticiasModule { }
