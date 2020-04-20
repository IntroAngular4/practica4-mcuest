import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterprojectsformComponent } from './filterprojectsform.component';

describe('FilterprojectsformComponent', () => {
  let component: FilterprojectsformComponent;
  let fixture: ComponentFixture<FilterprojectsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterprojectsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterprojectsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
