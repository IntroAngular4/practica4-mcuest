import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProjectsService } from '../projects.service';

@Component( {
  selector: 'app-viewerproject',
  templateUrl: './viewerproject.component.html',
  styleUrls: ['./viewerproject.component.css']
} )
export class ViewerprojectComponent implements OnInit {

  public nombreProyecto: number;

  constructor( activateRoute: ActivatedRoute, private projectService: ProjectsService ) {
    activateRoute.params.subscribe( params => {
      this.nombreProyecto = params.id;
      //this.proyecto = environment.projects.find( p => p.id == this.proyectoId );
    } );
  }

  ngOnInit(): void {
  }

}
