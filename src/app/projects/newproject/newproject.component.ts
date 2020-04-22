import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../models/project.model';
import { ProjectsService } from '../projects.service';

@Component( {
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
} )
export class NewprojectComponent implements OnInit {

  constructor( private projectService: ProjectsService, private router: Router ) { }

  ngOnInit(): void {
  }

  public saveProject( proyecto: Project ) {
    //this.nuevoProyecto.id = this.contador;
    // this.proyectos.push( { ...this.nuevoProyecto } );

    //this.projectService.guardarProyecto( name );

    this.projectService.guardarProyectoHttp( proyecto );
    this.router.navigate( ['./'] );
  }

}
