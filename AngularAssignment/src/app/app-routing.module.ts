import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './resource/Components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' }, //default
  { path: '**', component: NotFoundComponent } //if path wrong

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
