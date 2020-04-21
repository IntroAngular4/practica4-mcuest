import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { ProjectsService } from '../projects.service';


@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
} )
export class ProjectsComponent implements OnInit {

  public proyectos: Project[] = [];
  public proyectosHttp$: Observable<Project[]> = null;

  constructor( private projectService: ProjectsService ) { }

  ngOnInit(): void {
    //this.proyectos = environment.projects;
    this.projectService.getProyectosHttp().subscribe( result => ( this.proyectos = result ) );
  }

  filterProject( name: string ) {
    this.proyectos = this.projectService.filtrarProyecto( name );
  }

  guardaHttp() {
    this.projectService.guardarProyectoHttp( 'pruebaProy01' );
  }
}
