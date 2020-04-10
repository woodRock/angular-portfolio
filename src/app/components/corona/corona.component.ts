import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {

  private readonly URL: SafeResourceUrl;
  private _loading = true;

  constructor(private sanitizer: DomSanitizer) {
    const map = 'https://www.google.com/maps/d/embed?mid=1OpK1PunEXt7LnC3Xa6EwlFWq0k1AoVnY';
    this.URL = this.sanitizer.bypassSecurityTrustResourceUrl(map);
  }

  ngOnInit() {
    const iframe = document.getElementById('iframe');
    iframe.onload = () => {
      this._loading = false;
    };
  }

  get loading(): Boolean {
    return this._loading;
  }

  getURL() {
    return this.URL;
  }
}
