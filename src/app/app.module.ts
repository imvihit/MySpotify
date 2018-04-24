import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpotifyDirective } from './spotify.directive';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import {HttpClientModule} from '@angular/common/http';
import {Http, HttpModule, JsonpModule} from '@angular/http';
import Spotify from 'spotify-api-client';



const  appRoutes: Routes = [
  {path : 'search', component : SearchComponent},
  {path : 'about', component : AboutComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpotifyDirective,
    AboutComponent,
    SearchComponent,
  ],
  imports: [
    HttpClientModule,HttpModule, JsonpModule, FormsModule, BrowserModule,  RouterModule.forRoot(appRoutes)],

  bootstrap: [AppComponent],
})
export class AppModule { }
