import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsPgComponent } from './listings-pg.component';

describe('ListingsPgComponent', () => {
  let component: ListingsPgComponent;
  let fixture: ComponentFixture<ListingsPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
