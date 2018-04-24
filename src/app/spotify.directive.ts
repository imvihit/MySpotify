import { Directive, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import {NavbarComponent} from './navbar/navbar.component';

@Directive({
  selector: '[appSpotify]'
})
export class SpotifyDirective {

  constructor(el: ElementRef) {
    el.nativeElement.title = 'The title of courses page';

  }
}
