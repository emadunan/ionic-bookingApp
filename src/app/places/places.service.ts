import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  // tslint:disable-next-line: variable-name
  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1', 'Manhattan', 'In the heart of New York City.', 199.99,
      // tslint:disable-next-line: max-line-length
      'https://cdn.vox-cdn.com/thumbor/o8i78cus90a1owJAbC-kzlr7ALs=/0x0:6303x4202/1200x800/filters:focal(2648x1597:3656x2605)/cdn.vox-cdn.com/uploads/chorus_image/image/63239068/GettyImages_929640540_2.0.jpg',
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
    new Place(
      'p2', 'Cairo', 'The Capital of Egypt.', 39.99,
      // tslint:disable-next-line: max-line-length
      'https://www.woimacorporation.com/wp-content/uploads/2019/01/Landscape-of-Cairo-Egypt-pyramids-on-the-background-drowning-in-waste-WOIMA-Corporation.png',
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
    new Place(
      'p3', 'Zagazig', 'The city i was born in.', 99.99,
      // tslint:disable-next-line: max-line-length
      'https://upload.wikimedia.org/wikipedia/commons/d/d5/Bubastis_011.JPG',
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    )
  ]);

  get places() {
    return this._places.asObservable();
  }

  constructor(private authService: AuthService) { }

  getPlace(id: string) {
    return this.places.pipe(take(1), map(places => {
      return {...places.find(p => p.id === id)};
    }));
  }

  addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {
    const newPlace = new Place(
      'p4',
      title,
      description,
      price,
      'https://upload.wikimedia.org/wikipedia/commons/d/d5/Bubastis_011.JPG',
      dateFrom,
      dateTo,
      this.authService.userId
    );
    this.places.pipe(take(1)).subscribe((places) => {
      this._places.next(places.concat(newPlace));
    });
    console.log(this.places);
  }

}
