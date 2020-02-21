import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private route: ActivatedRoute,
    private navCtl: NavController,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtl.navigateBack(`/places/tabs/discover`);
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    } );
  }

  onBookPlace() {
    // this.router.navigateByUrl(`/places/tabs/discover`);
    this.navCtl.navigateBack(`/places/tabs/discover`);
  }

}
