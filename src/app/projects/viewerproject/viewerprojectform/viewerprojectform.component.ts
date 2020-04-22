import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component( {
  selector: 'app-viewerprojectform',
  templateUrl: './viewerprojectform.component.html',
  styleUrls: ['./viewerprojectform.component.css']
} )
export class ViewerprojectformComponent implements OnInit {

  @Input() project: Project;

  constructor() { }

  ngOnInit(): void {
  }

}
