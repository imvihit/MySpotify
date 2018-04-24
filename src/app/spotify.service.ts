import { Injectable } from '@angular/core';
import {Http, Jsonp, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import Spotify from 'spotify-api-client';
import {URLSearchParams} from '@angular/http';


@Injectable()
export class SpotifyService {

  private   searchUrl: string;
  apikey: string;
  constructor(private _jsonp: Jsonp ) {
    this.searchUrl = '0fa6455eac464234b9da90218db5cf89';
    console.log('Musicservice');

  }

    searchMusic(str: string , type= 'artist') {
    return this._jsonp.get('https://api.spotify.com/v1/search?callback=JSONP_CALLBACK' + str + '&offset=0&limit=20&type=' + type + '&market=US&api_key=' + this.searchUrl)
    .map(res => res.json());
    }
}

