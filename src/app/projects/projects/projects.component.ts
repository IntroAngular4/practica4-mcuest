import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
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
    this.proyectos = environment.projects;
  }

  filterProject( name: string ) {
    this.proyectos = this.projectService.filtrarProyecto( name );

    // if ( name.trim().length > 0 ) {
    //   this.proyectos = this.proyectos.filter( p => p.name.toUpperCase().indexOf( name.toUpperCase() ) > -1 );
    // }
    // else {
    //   this.proyectos = environment.projects;
    // }
  }
}
