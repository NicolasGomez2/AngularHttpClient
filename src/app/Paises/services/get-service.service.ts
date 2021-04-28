import { Paises } from './../interfaces/paises';
import { Injectable, OnInit } from '@angular/core'; // importación del servicio Injectable
import { HttpClient } from '@angular/common/http'; // importación del servicio HttpClient
import { Observable } from 'rxjs';


@Injectable({ // Decorador Injectable
  providedIn: 'root'
})
export class GetServiceService implements OnInit { // Exportación del servicio get-service

  private URL = 'https://restcountries.eu/rest/v2/all';  
  resultadoPeticion; // Objeto que contendra la data

  constructor(private http: HttpClient) {} // constructor que inicializa el servicio  HttpClient como privado

  ngOnInit () { this.getPaises(); } // Inicialización del metodo get()  en el ngOninit


  public getPaises(): Observable<Paises[]>{ // Metodo get 
  
  return this.http.get<Paises[]>(this.URL);  
   
  } 
  
}



