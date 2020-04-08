import {Component, OnDestroy, OnInit} from '@angular/core';
import {SocialService} from '../../services/social.service';
import {Social} from '../../models/social.model';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit, OnDestroy {
  private _social: Social[];
  private subscription: Subscription;

  constructor(private service: SocialService) { }

  ngOnInit() {
    this.subscription = this.service.list().subscribe(social => {
      this._social = social;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  get social(): Social[] {
    return this._social;
  }
}


