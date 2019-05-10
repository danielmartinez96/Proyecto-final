import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Proyecto } from 'src/app/modelo/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-proyecto',
  templateUrl: './table-proyecto.component.html',
  styleUrls: ['./table-proyecto.component.scss']
})
export class TableProyectoComponent implements OnInit {

  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['nombre', 'descripcion', 'domicilio', 'fecha_creacion'];

  constructor(private userService: ) { }

  ngOnInit() {
  }

}

export class UserDataSource extends DataSource<any> {

  constructor(private proyectoService: ProyectoService) {
    super();
  }

  connect(): Observable<Proyecto[]> {
    return this.proyectoService.getProyectos();
  }

  disconnect() {}

}
