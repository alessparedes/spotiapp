import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading: boolean;
  
  constructor(private varSpotify: SpotifyService) {
    this.loading = true;

    this.varSpotify.getNewReleases().subscribe((data: any) => {
      this.newSongs = data;
      this.loading = false;
    });

  }

  ngOnInit(): void {
  }

}
