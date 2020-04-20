import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerprojectformComponent } from './viewerprojectform.component';

describe('ViewerprojectformComponent', () => {
  let component: ViewerprojectformComponent;
  let fixture: ComponentFixture<ViewerprojectformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerprojectformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerprojectformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
