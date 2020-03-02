import { Component, OnInit, OnDestroy } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit, OnDestroy {
  offers: Place[];
  placesSub = new Subscription();

  constructor(private placesService: PlacesService, private navCtl: NavController) { }

  ngOnInit() {
    this.placesSub = this.placesService.places.subscribe(places => {
      this.offers = places;
    });
  }

  onEdit(offerId: string) {
    console.log('Editing Item', offerId);
  }

  ngOnDestroy() {
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }
}
