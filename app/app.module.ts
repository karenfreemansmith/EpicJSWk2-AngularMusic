import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ListAlbumsComponent } from './albums-list.component';
import { EditAlbumComponent } from './album-edit.component';
import { NewAlbumComponent } from './album-new.component';
import { CartComponent } from './cart.component';
import { GenrePipe } from './genre.pipe';
import { ArtistPipe } from './artist.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ListAlbumsComponent,
    EditAlbumComponent,
    NewAlbumComponent,
    CartComponent,
    GenrePipe,
    ArtistPipe,
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
