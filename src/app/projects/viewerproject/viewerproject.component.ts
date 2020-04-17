import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { environment } from '../../../environments/environment';
import { Project } from '../models/project.model';

@Component( {
  selector: 'app-viewerproject',
  templateUrl: './viewerproject.component.html',
  styleUrls: ['./viewerproject.component.css']
} )
export class ViewerprojectComponent implements OnInit {

  public proyecto: Project;

  constructor( activateRoute: ActivatedRoute ) {
    activateRoute.params.subscribe( params => {
      const proyectoId = params.id;
      this.proyecto = environment.projects.find( p => p.id == proyectoId );
    } );
  }

  ngOnInit(): void {
  }

}
