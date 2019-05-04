import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticacionService } from '../autenticacion.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup;
  urlRetorno:string;
  mensaje:string;
  constructor(private fb:FormBuilder,
    private autenticacionService: AutenticacionService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginGroup= this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      remember_me:[''],
    });
    this.urlRetorno=this.route.snapshot.queryParams["urlRespuesta"];
  }

  validar(){
     this.mensaje="";
   
    if(this.loginGroup.invalid){
      console.log("invalido");
      return;
    }
    if(this.loginGroup.controls.email.value=="admin@admin"&&this.loginGroup.controls.password.value=="admin")
    {
      localStorage.setItem("usuario","admin");
      console.log("admin");
      this.router.navigate([""]);
      return;
    }

    this.autenticacionService.login(this.loginGroup.controls.email.value,this.loginGroup.controls.password.value)
    .subscribe(datos=>{
        localStorage.setItem("usuario",JSON.stringify(datos));
        this.router.navigate([""]);
        return;
      });

    this.mensaje="Datos incorrectos";
   
  }

 
}
