import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings } from '../fake-data';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  email : string = '';
  message : string = '';
  listing : Listing;

  constructor(private route : ActivatedRoute, private router : Router, private listingsService : ListingsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id);
    this.message = `Hi, I am interested in your ${this.listing.name.toLowerCase()}!`;  //note the use of the ticks and not quotes and the single bracket + $ sign
  }

  //method when user presses submit button
  sendMessage() : void {  //void is specifying that this method will not return anything
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');  //Router will redirect you to the listings page.
  }

}
