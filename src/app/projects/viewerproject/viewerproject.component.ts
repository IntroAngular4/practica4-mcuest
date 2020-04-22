import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { ProjectsService } from '../projects.service';

@Component( {
  selector: 'app-viewerproject',
  templateUrl: './viewerproject.component.html',
  styleUrls: ['./viewerproject.component.css']
} )
export class ViewerprojectComponent implements OnInit {

  public nombreProyecto: string;
  public proyect: Project;

  public proyecto$: Observable<Project>;

  constructor( activateRoute: ActivatedRoute, private projectService: ProjectsService ) {
    activateRoute.params.subscribe( params => {
      this.nombreProyecto = params.id;
      //this.proyecto = environment.projects.find( p => p.id == this.proyectoId );
      this.proyecto$ = this.projectService.getProyectoById( this.nombreProyecto );
    } );
  }

  ngOnInit(): void {
  }

}
