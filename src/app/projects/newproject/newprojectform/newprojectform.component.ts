import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../models/project.model';

@Component( {
  selector: 'app-newprojectform',
  templateUrl: './newprojectform.component.html',
  styleUrls: ['./newprojectform.component.css']
} )
export class NewprojectformComponent implements OnInit {

  public nuevoProyecto: Project = {
    _id: -1,
    name: '',
    description: ''
  };

  public formGroup: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  @Output() public guardaProyecto = new EventEmitter<Project>();

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group( {
      name: ['', [Validators.required]],
      description: ['', [Validators.minLength( 10 )]]
    } );
  }

  public onGuardarProyecto() {
    //this.guardaProyecto.emit( this.nuevoProyecto.name );
    this.guardaProyecto.emit( this.formGroup.value )
  }
}
