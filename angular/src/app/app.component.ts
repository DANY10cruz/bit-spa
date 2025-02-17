import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ContenidoPrincipalComponent } from './components/contenido-principal/contenido-principal.component';
import { MiProyectoComponent } from './components/mi-proyecto/mi-proyecto.component';
import { RouterOutlet } from '@angular/router';
import { ProyectoDosComponent } from './components/proyecto-dos/proyecto-dos.component';

@Component({
  selector: 'app-root',
  imports: [
    FooterComponent,
    NavComponent,
    ContenidoPrincipalComponent,
    MiProyectoComponent,
    RouterOutlet,
    ProyectoDosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
