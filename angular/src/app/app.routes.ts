import { Routes } from '@angular/router';
import { ContenidoPrincipalComponent } from './components/contenido-principal/contenido-principal.component';
import { MiProyectoComponent } from './components/mi-proyecto/mi-proyecto.component';
import { ProyectoDosComponent } from './components/proyecto-dos/proyecto-dos.component';

export const routes: Routes = [
  {
    path: 'nosotros',
    component: ContenidoPrincipalComponent,
  },
  {
    path: 'mi-proyecto',
    component: MiProyectoComponent,
  },
  {
    path: 'proyecto-dos',
    component: ProyectoDosComponent,
  },
];
