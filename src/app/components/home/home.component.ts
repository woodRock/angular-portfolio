import {Component, OnDestroy, OnInit} from '@angular/core';
import {Feature} from '../../models/feature.model';
import {Subscription} from 'rxjs';
import {CrudService} from '../../services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private static COLLECTION = 'features';
  private _features: Feature[];
  private subscription: Subscription;

  constructor(private service: CrudService<Feature>) {}

  ngOnInit() {
    this.service.setName(HomeComponent.COLLECTION);
    this.subscription = this.service.list().subscribe(feature => {
      this._features = feature;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get features(): Feature[] {
    return this._features;
  }
}
