import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-viewerprojectform',
  templateUrl: './viewerprojectform.component.html',
  styleUrls: ['./viewerprojectform.component.css']
} )
export class ViewerprojectformComponent implements OnInit {

  @Input() projectName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
