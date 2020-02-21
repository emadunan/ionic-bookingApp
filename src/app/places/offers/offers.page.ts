import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[];

  constructor(private placesService: PlacesService, private navCtl: NavController) { }

  ngOnInit() {
    this.offers = this.placesService.places.slice();
  }
}
