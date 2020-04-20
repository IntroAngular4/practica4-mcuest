import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component( {
  selector: 'app-filterprojectsform',
  templateUrl: './filterprojectsform.component.html',
  styleUrls: ['./filterprojectsform.component.css']
} )
export class FilterprojectsformComponent implements OnInit {

  public filterName: string;
  @Input() title: string;
  @Output() filterProjectsEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  filtrarProyectos() {
    this.filterProjectsEvent.emit( this.filterName );
  }

}
