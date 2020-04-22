import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectsService } from '../projects.service';


@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
} )
export class ProjectsComponent implements OnInit {

  public proyectos: Project[] = [];

  constructor( private projectService: ProjectsService ) { }

  ngOnInit(): void {
    this.projectService.getProyectosHttp().subscribe( result => ( this.proyectos = result ) );
  }

  filterProject( name: string ) {
    if ( name.length == 0 ) {
      this.projectService.getProyectosHttp().subscribe( result => ( this.proyectos = result ) );
    }
    else {
      this.proyectos = this.proyectos.filter( x => x.name.toUpperCase().indexOf( name.toUpperCase() ) > -1 );
    }
  }

  deleteProjects() {
    this.projectService.borrarProyectos();
  }
}
