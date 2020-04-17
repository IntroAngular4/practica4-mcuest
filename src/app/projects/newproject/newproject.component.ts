import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Project } from '../models/project.model';

@Component( {
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
} )
export class NewprojectComponent implements OnInit {

  private contador: number;
  public proyectos: Project[];
  public nuevoProyecto: Project = {
    id: -1,
    name: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.proyectos = environment.projects;
    this.contador = this.proyectos.length;
  }

  public saveProject() {
    this.nuevoProyecto.id = this.contador;
    this.proyectos.push( { ...this.nuevoProyecto } );
    this.contador += 1;
  }

}
