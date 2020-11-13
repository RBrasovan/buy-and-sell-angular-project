import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ListingsPgComponent } from './listings-pg/listings-pg.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

const routes: Routes = [
  {path : '', redirectTo : '/listings', pathMatch : 'full'},  //so this is a redirect so if you are on the "home" page, it will redirect you to the /listings page which we made a route for below.
  {path : 'listings', component : ListingsPgComponent, pathMatch : 'full'},
  {path : 'listings/:id', component : ListingDetailPageComponent}, //:id is a URL parameter and is also why pathMatch : 'full' is used on the row above.
  {path : 'contact/:id', component : ContactPageComponent},
  {path : 'edit-listing/:id', component : EditListingPageComponent},
  {path : 'my-listings', component : MyListingsPageComponent},
  {path : 'new-listing', component : NewListingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
