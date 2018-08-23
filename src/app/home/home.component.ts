import { Component, OnInit } from '@angular/core';
import { FEATURES } from '../mock-features';
import { Feature } from '../feature';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  features = FEATURES;
  
  selectedFeature : Feature;

  onSelect(p: Feature): void {
    this.selectedFeature = p;
  }

  constructor() { }

  ngOnInit() {
  }

}
