import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})

export class ListingDetailPageComponent implements OnInit {
  isLoading : boolean = true;

  //So now that we have that we want to use it to get the correct Listing data based off of it.
  listing : Listing;  //variable listing of object type Listing

  //activated route allows us to access he URL parameter value
  constructor(private route : ActivatedRoute, private listingsService : ListingsService) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //here it is actually getting the parameter value from the URL.
    this.listingsService.getListingsById(id).subscribe(listing => {
      this.listing = listing;
      this.isLoading = false;
      });
      this.listingsService.addViewToListing(id).subscribe(() => console.log('Views Updated!'));
  }

}
