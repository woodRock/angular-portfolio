import {Component, OnDestroy, OnInit} from '@angular/core';
import {FeatureService} from '../../services/feature.service';
import {Feature} from '../../models/feature.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private _features: Feature[];
  private subscription: Subscription;

  constructor(private service: FeatureService) { }

  ngOnInit() {
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
