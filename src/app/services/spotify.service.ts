import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBgp9qP96_7LKR8sZrAylkVFPt7EdgmFB0zU9EQ2i4V3lPrMzP4OjSeJ6l_GHspUZMxVPSS6yHpLxTFb6pO4C1DFydlVomta48Arv6OLJWtomKBdcy24H9-FFIVbIfpB38euzeEvJQ'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
            .pipe( map((data:any) => data['albums'].items));
  }

  getArtists(term: string){

    return this.getQuery(`search?q=${term}&type=artist`)
            .pipe(map((data:any) => data['artists'].items));
  }

  getArtist(id: string){

    return this.getQuery(`artists/${id}`);
  }
}
