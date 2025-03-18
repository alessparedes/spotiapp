import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    this.loading = false; 
   }
  

  search(value: string){
    this.loading = true;
    this.spotify.getArtists(value).subscribe( (data: any) => {
      this.artists = data;
      this.loading = false;
    });
  }
}
