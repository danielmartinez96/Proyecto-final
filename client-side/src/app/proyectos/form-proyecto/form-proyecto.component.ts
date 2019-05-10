import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from 'src/app/modelo/proyecto';
@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.scss']
})
export class FormProyectoComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private fb: FormBuilder,
    private proyectoService: ProyectoService,
    private router: Router) { }

  ngOnInit() {
    this.formGroup= this.fb.group({
      nombre:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      domicilio:['',[Validators.required]],
    });
  }

  crear(){
  
   if(this.formGroup.invalid){
     console.log("invalido");
     return;
   }
   let proyecto: Proyecto= Object.assign({},this.formGroup.value);
   
   var f = new Date();
   var date =f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
   proyecto.fecha_creacion=date;
   console.table(proyecto)
   this.proyectoService.crear(proyecto)
   .subscribe(datos=>  this.router.navigate(["/proyectos"]),error=>console.error(error));
   
 }
 volver()
 {
  this.router.navigate(["/proyectos"]);
 }


}
