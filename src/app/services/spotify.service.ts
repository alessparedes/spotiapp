import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBRUAa0BsFAhfI59bOs_b6UhcVN4szi0F05Gs55QoCMAomVu-gk4ez-I7AEayyaXlUvvwXiwxTBnc5vTpCEazITnY-0qDVUzOB2N0Sx54SBDGcI5PiVjKJwikpCyTktitpUjFo8DBo'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers});
  }
}
