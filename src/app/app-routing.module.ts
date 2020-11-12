import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingsPgComponent } from './listings-pg/listings-pg.component';

const routes: Routes = [
  {path : 'listings', component : ListingsPgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
