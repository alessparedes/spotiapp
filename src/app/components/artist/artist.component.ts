import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artist: any = {};
  loading: boolean = false;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) { 
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
    });
  }

  getArtist(id: string){
    this.loading = true;
    this.spotify.getArtist(id).subscribe( artistValues => {
      console.log(artistValues);
      this.artist = artistValues;
      this.loading = false;
    });
  }

}
