import {Component, OnInit} from '@angular/core';
import {Route} from "@angular/router";
import {routes} from "../../app-routing.module";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  private typewriter_text: string = "wR";
  private typewriter_display: string = this.typewriter_text + "|";

  constructor() { }

  ngOnInit() {
    this.typingCallback(this);
  }

  typingCallback(that) {
    let delay: number = 500;
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    let cursor = "|";
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
    } else {
      if (that.typewriter_display.slice(-1) == cursor){
        that.typewriter_display = that.typewriter_display.slice(0, -1);
      } else {
        that.typewriter_display += cursor;
      }
    }
    setTimeout(that.typingCallback, delay, that);
  }

  capitalise(string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  get tabs(): Route[] {
    return routes.filter( i => i.path != '');
  }

  get title(): string {
    return this.typewriter_display;
  }
}
