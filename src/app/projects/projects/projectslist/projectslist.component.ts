import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component( {
  selector: 'app-projectslist',
  templateUrl: './projectslist.component.html',
  styleUrls: ['./projectslist.component.css']
} )
export class ProjectslistComponent implements OnInit {

  @Input() proyectos: Project[];

  constructor() { }

  ngOnInit(): void {
  }

}
