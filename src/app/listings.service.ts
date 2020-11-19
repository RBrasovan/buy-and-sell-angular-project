import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from './types';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers : new HttpHeaders({
    'Content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private http : HttpClient) { }

  getListings() : Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }

  getListingsById(id : string) : Observable<Listing> {
    return this.http.get<Listing>(`/api/listings/${id}`);
  }

  addViewToListing(id : string) : Observable<Listing> {
    return this.http.post<Listing>(`/api/listings/${id}/add-view`, {}, httpOptions);
  }

  getListingsForUser() : Observable<Listing[]> {
    return this.http.get<Listing[]>(`/api/users/12345/listings`);
  }

  deleteListing(id : string) : Observable<Listing> {
    return this.http.delete<Listing>(`/api/listings/${id}`);
  }

  createListing(name : string, description : string, price : number) : Observable<Listing> {
    return this.http.post<Listing>(`/api/listings`, {name, description, price}, httpOptions);  //URL, what you want in the body so parameters, and then httpOptions which is a type of header that you need.
  }

  editListing(id : string, name : string, description : string, price : number) : Observable<Listing> {
    return this.http.post<Listing>(`/api/listings/${id}`, {name, description, price}, httpOptions);  //URL, what you want in the body so parameters, and then httpOptions which is a type of header that you need.
  }
}
