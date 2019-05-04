import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/autenticacion/autenticacion.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  
  constructor(private autenticationService: AutenticacionService,
    private router: Router) { }

  ngOnInit() {
  }

  public logout() {
    this.autenticationService.logout();
    this.router.navigate(['/']);
  }

}
