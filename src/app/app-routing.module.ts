import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {  // Array de objetos que almacena las rutas
    path: '',
    loadChildren: () => import('./Paises/paises/paises.module').then(m => m.PaisesModule)
  }

];


@NgModule({// decorador, unidad de distribución y compilación de los componentes
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }




