import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AddMuseumComponent } from './components/add-museum/add-museum.component';
import { IndexComponent } from './components/museums-list/museums-list.component';
import { MuseumDetailComponent } from './components/museum-detail/museum-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SingleMuseumComponent } from './components/museums-list/museums-list-item/museums-list-item.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'museums', pathMatch: 'full' },
  { path: 'add', component: AddMuseumComponent },
  { path: 'singleMuseum', component: SingleMuseumComponent },
  { path: 'museumDetail/:museumId', component: MuseumDetailComponent },
  { path: 'museums', component: IndexComponent },
  { path: 'not-found', component: NotFoundComponent }, // A ajouter à la fin des paths (en dernier)
  { path: '**', redirectTo: 'not-found' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
