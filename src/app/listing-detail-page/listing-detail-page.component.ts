import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {

  //So now that we have that we want to use it to get the correct Listing data based off of it.
  listing : Listing;  //variable listing of object type Listing

  //activated route allows us to access he URL parameter value
  constructor(private route : ActivatedRoute, ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //here it is actually getting the parameter value from the URL.
    this.listing = fakeListings.find(listing => listing.id === id); 
  }

}
