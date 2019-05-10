import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProyectoComponent } from './table-proyecto.component';

describe('TableProyectoComponent', () => {
  let component: TableProyectoComponent;
  let fixture: ComponentFixture<TableProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
