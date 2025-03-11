import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises: any[] = [];
  constructor( private http: HttpClient) { 
    console.log('Constructor');
    this.http.get('https://restcountries.com/v3.1/lang/spanish').subscribe( (resp: any) => {
        this.paises = resp;
        console.log(this.paises);
      });
  }

  ngOnInit(): void {
  }

}
