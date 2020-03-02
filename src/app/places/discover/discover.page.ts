import { Component, OnInit, OnDestroy } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];
  loadedPlacesSub: Subscription;

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedPlacesSub = this.placesService.places.subscribe( places => {
      this.loadedPlaces = places;
    });
    this.listedLoadedPlaces = this.loadedPlaces.slice(1);
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }

  ngOnDestroy() {
    if (this.loadedPlacesSub) {
      this.loadedPlacesSub.unsubscribe();
    }
  }

}
