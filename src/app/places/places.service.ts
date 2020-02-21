import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  // tslint:disable-next-line: variable-name
  private _places: Place[] = [
    new Place(
      'p1', 'Manhattan', 'In the heart of New York City.', 199.99,
      // tslint:disable-next-line: max-line-length
      'https://cdn.vox-cdn.com/thumbor/o8i78cus90a1owJAbC-kzlr7ALs=/0x0:6303x4202/1200x800/filters:focal(2648x1597:3656x2605)/cdn.vox-cdn.com/uploads/chorus_image/image/63239068/GettyImages_929640540_2.0.jpg'
    ),
    new Place(
      'p2', 'Cairo', 'The Capital of Egypt.', 39.99,
      // tslint:disable-next-line: max-line-length
      'https://www.woimacorporation.com/wp-content/uploads/2019/01/Landscape-of-Cairo-Egypt-pyramids-on-the-background-drowning-in-waste-WOIMA-Corporation.png'
    ),
    new Place(
      'p3', 'Zagazig', 'The city i was born in.', 99.99,
      // tslint:disable-next-line: max-line-length
      'https://upload.wikimedia.org/wikipedia/commons/d/d5/Bubastis_011.JPG'
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
