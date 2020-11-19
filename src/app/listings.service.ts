import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from './types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-type' : 'application/json'
  })
};

const httpOptionsWithAuthToken = token => ({
  headers : new HttpHeaders({
    'Content-type' : 'application/json',
    "AuthToken" : token,
  })
});

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private http : HttpClient, private auth : AngularFireAuth) { }

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
    return new Observable<Listing[]>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          if(user && token) {
            return this.http.get<Listing[]>(`/api/users/${user.uid}/listings`, httpOptionsWithAuthToken(token)).subscribe(listings => {
              observer.next(listings);
            });
          }
          else {
            observer.next([]);
          }
        })
      })
    })
  }

  deleteListing(id : string) : Observable<Listing> {
    return new Observable<any>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
           this.http.delete<Listing>(`/api/listings/${id}`, httpOptionsWithAuthToken(token)).subscribe(() => observer.next());
        })
      })
    })
  }

  createListing(name : string, description : string, price : number) : Observable<Listing> {
    return new Observable<Listing>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
         this.http.post<Listing>(`/api/listings`, {name, description, price}, httpOptionsWithAuthToken(token)).subscribe(() => observer.next());
        })
      })
    })
  }

  editListing(id : string, name : string, description : string, price : number) : Observable<Listing> {
    return new Observable<Listing>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          this.http.post<Listing>(`/api/listings/${id}`, {name, description, price}, httpOptionsWithAuthToken(token)).subscribe(() => observer.next());
        })
      })
    })

    return this.http.post<Listing>(`/api/listings/${id}`, {name, description, price}, httpOptions);  //URL, what you want in the body so parameters, and then httpOptions which is a type of header that you need.
  }
}
