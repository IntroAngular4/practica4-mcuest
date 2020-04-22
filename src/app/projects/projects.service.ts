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

  public getProyectoById( id: string ) {
    return this.httpClient.get<Project>( this.urlApi + '/' + id );
  }

  public guardarProyectoHttp( proyecto: Project ) {
    this.httpClient.post( this.urlApi, proyecto ).subscribe();
  }

  public guardarProyecto( nombre: string, descripcion: string ) {
    this.proyectos = environment.projects;
    const nuevoProyecto: Project = { _id: this.proyectos.length, name: nombre, description: descripcion };
    this.proyectos.push( nuevoProyecto );
    return true;
  }

  public borrarProyectos() {
    this.httpClient.delete( this.urlApi ).subscribe();
  }
}
