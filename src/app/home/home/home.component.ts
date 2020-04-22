import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Project } from '../../projects/models/project.model';
import { ProjectsService } from '../../projects/projects.service';


@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
} )
export class HomeComponent implements OnInit {

  public numProyectos: number = 0;
  public counterClass = 'tag secondary';
  public proyectos$: Observable<Project[]> = null;


  constructor( private projectsService: ProjectsService ) {
  }

  ngOnInit(): void {
    //this.numProyectos = environment.projects.length;
    this.proyectos$ = this.projectsService.getProyectosHttp();
    //this.proyectos$.subscribe( response => console.log( response ) );
    this.proyectos$.pipe( tap( x => x.map( () => this.numProyectos += 1 ) ) ).subscribe();
  }
}
