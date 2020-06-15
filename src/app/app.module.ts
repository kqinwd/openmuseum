import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { AddMuseumComponent } from './components/add-museum/add-museum.component';
import { IndexComponent } from './components/museums-list/museums-list.component';
import { MuseumDetailComponent } from './components/museum-detail/museum-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SingleMuseumComponent } from './components/museums-list/museums-list-item/museums-list-item.component';
import { MapComponent } from './components/museum-detail/museum-map/museum-map.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MuseumInfoComponent } from './components/museum-detail/museum-info/museum-info.component';

@NgModule({

  declarations: [
    AppComponent,
    AddMuseumComponent,
    IndexComponent,
    SingleMuseumComponent,
    MapComponent,
    MuseumDetailComponent,
    MuseumInfoComponent,
    NotFoundComponent,

    NavbarComponent,
  ],

  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
