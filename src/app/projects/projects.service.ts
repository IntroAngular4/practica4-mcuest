import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Project } from './models/project.model';

@Injectable( {
  providedIn: 'root'
} )
export class ProjectsService {

  private proyectos: Project[] = [];

  constructor() { }

  public filtrarProyecto( nombre: string ): Project[] {
    this.proyectos = environment.projects;
    if ( nombre.trim().length > 0 ) {
      this.proyectos = this.proyectos.filter( p => p.name.toUpperCase().indexOf( nombre.toUpperCase() ) > -1 );
    }
    return this.proyectos
  }

  public guardarProyecto( nombre: string ) {
    this.proyectos = environment.projects;
    const nuevoProyecto: Project = { id: this.proyectos.length, name: nombre };
    this.proyectos.push( nuevoProyecto );
    return true;
  }
}
