import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprojectformComponent } from './newprojectform.component';

describe('NewprojectformComponent', () => {
  let component: NewprojectformComponent;
  let fixture: ComponentFixture<NewprojectformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewprojectformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewprojectformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
