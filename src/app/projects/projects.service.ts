import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Project } from './models/project.model';

@Injectable( {
  providedIn: 'root'
} )
export class ProjectsService {

  private proyectos: Project[] = [];
  private urlApi: string = 'https://api-base.herokuapp.com/api/pub/projects';

  constructor( private httpClient: HttpClient ) { }

  public getProyectosHttp() {
    return this.httpClient.get<Project[]>( this.urlApi );
  }

  // public getProyectoById( id: number ) {
  //   return this.httpClient.get<Project>( this.urlApi + '/' + id );
  // }

  public guardarProyectoHttp( nombre: string ) {
    const nuevoProyecto = { name: nombre };
    this.httpClient.post( this.urlApi, nuevoProyecto ).subscribe();
  }

  //public filtrarProyecto( nombre: string ) {
  // this.proyectos = environment.projects;
  // if ( nombre.trim().length > 0 ) {
  //   this.proyectos = this.proyectos.filter( p => p.name.toUpperCase().indexOf( nombre.toUpperCase() ) > -1 );
  // }
  // return this.proyectos
  //}

  public guardarProyecto( nombre: string ) {
    this.proyectos = environment.projects;
    const nuevoProyecto: Project = { _id: this.proyectos.length, name: nombre };
    this.proyectos.push( nuevoProyecto );
    return true;
  }

  public borrarProyectos() {
    this.httpClient.delete( this.urlApi ).subscribe();
  }
}
