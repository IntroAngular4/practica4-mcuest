import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component( {
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
} )
export class NewprojectComponent implements OnInit {

  constructor( private projectService: ProjectsService ) { }

  ngOnInit(): void {
  }

  public saveProject( name: string ) {
    //this.nuevoProyecto.id = this.contador;
    // this.proyectos.push( { ...this.nuevoProyecto } );
    this.projectService.guardarProyecto( name );
  }

}
