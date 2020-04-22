import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MuseumService } from './services/openmuseum.service'

import { AppComponent } from './app.component';
import { SingleMuseumComponent } from './single-museum/single-museum.component';
import { AddMuseumComponent } from './add-museum/add-museum.component';
import { IndexComponent } from './index/index.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'add', component: AddMuseumComponent },
  { path: 'singleMuseum', component: SingleMuseumComponent },
  { path: 'museumDetail/:reference', component: MuseumDetailComponent },
  { path: '', component: IndexComponent },
  { path: 'not-found', component: NotFoundComponent }, // A ajouter à la fin des paths (en dernier)
  { path: '**', redirectTo: 'not-found' },
]

@NgModule({

  declarations: [
    AppComponent,
    SingleMuseumComponent,
    IndexComponent,
    AddMuseumComponent,
    MuseumDetailComponent,
    NotFoundComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LeafletModule.forRoot()
  ],

  providers: [MuseumService],
  bootstrap: [AppComponent]
})

export class AppModule { }
