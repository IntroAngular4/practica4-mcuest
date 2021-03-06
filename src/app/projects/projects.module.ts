import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewprojectComponent } from './newproject/newproject.component';
import { NewprojectformComponent } from './newproject/newprojectform/newprojectform.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { FilterprojectsformComponent } from './projects/filterprojectsform/filterprojectsform.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectslistComponent } from './projects/projectslist/projectslist.component';
import { ViewerprojectComponent } from './viewerproject/viewerproject.component';
import { ViewerprojectformComponent } from './viewerproject/viewerprojectform/viewerprojectform.component';




@NgModule( {
  declarations: [ProjectsComponent, ViewerprojectComponent, NewprojectComponent, NewprojectformComponent, FilterprojectsformComponent, ProjectslistComponent, ViewerprojectformComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
} )
export class ProjectsModule { }
