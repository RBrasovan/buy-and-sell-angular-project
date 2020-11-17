import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import {ListingsService} from '../listings.service'

@Component({
  selector: 'app-listings-pg',
  templateUrl: './listings-pg.component.html',
  styleUrls: ['./listings-pg.component.css']
})
export class ListingsPgComponent implements OnInit {
  listings : Listing[] = [];  //how you make an array. In this case an array called listings of type Listing (class found in ../types). Right now it is assigned an empty array (dynamic by default?).

  constructor(private listingsService : ListingsService) { }

  ngOnInit(): void {
    this.listingsService.getListings().subscribe(listings => this.listings = listings); //the proper place to put an assignment like this. Will be used for the server later on.
  }

}
