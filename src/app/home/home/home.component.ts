import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
} )
export class HomeComponent implements OnInit {

  public numProyectos: number;
  public counterClass = 'tag secondary';

  constructor() { }

  ngOnInit(): void {
    this.numProyectos = environment.projects.length;
  }

}
