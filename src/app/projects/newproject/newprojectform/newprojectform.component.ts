import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from '../../models/project.model';

@Component( {
  selector: 'app-newprojectform',
  templateUrl: './newprojectform.component.html',
  styleUrls: ['./newprojectform.component.css']
} )
export class NewprojectformComponent implements OnInit {

  public nuevoProyecto: Project = {
    _id: -1,
    name: ''
  };

  constructor() { }

  @Output() public guardaProyecto = new EventEmitter<string>();

  ngOnInit(): void {
  }

  public onGuardarProyecto() {
    this.guardaProyecto.emit( this.nuevoProyecto.name )
  }
}
