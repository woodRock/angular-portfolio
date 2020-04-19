import {Component, OnDestroy, OnInit} from '@angular/core';
import {Social} from '../../models/social.model';
import {Subscription} from 'rxjs';
import {CrudService} from '../../services/crud.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit, OnDestroy {
  private static COLLECTION = 'social';
  private _social: Social[];
  private subscription: Subscription;

  constructor(private service: CrudService<Social>) {}

  ngOnInit() {
    this.service.setName(AboutMeComponent.COLLECTION);
    this.subscription = this.service.list().subscribe(social => {
      this._social = social;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get social(): Social[] {
    return this._social;
  }
}
