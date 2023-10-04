import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises: any[] = [];

  constructor(private http: HttpClient) { 
    console.log('Constructor');
    this.http.get('https://restcountries.com/v3.1/lang/spanish').
          subscribe( (data: any) => { 
            this.paises = data;
            console.log(data); 
          });
  }

  ngOnInit(): void {
  }

}
