import { GetServiceService } from './../../services/get-service.service'; // importacion del servicio
import { Component, OnInit } from '@angular/core'; 
import { Paises} from './../../interfaces/paises';         




@Component({  //Decorador de la clase del componente
  selector: 'app-list', // selector nombre de etiqueta con el que sera identificado el componente
  templateUrl: './list.component.html', // url del template
  styleUrls: ['./list.component.css'] // url de los estilos del componente
})
export class ListComponent implements OnInit { // exportación de la clase

 public paises : Paises[]=[];
 

  constructor(public getServiceService: GetServiceService) { } // Declaración del servicio en el componente

  ngOnInit(): void {

    this.getServiceService.getPaises().subscribe(paises => this.paises=paises); 
   
  }

}



