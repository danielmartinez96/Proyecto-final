import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/autenticacion/autenticacion.service';
interface ROUTE {
  icon?: string;
  route?: string;
  title?: string;
}
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  myWorkRoutes: ROUTE[] = [
    // {
    //   icon: 'assignment',
    //   route: 'sales/activities',
    //   title: 'Activities',
    // }, {
    //   icon: 'dashboard',
    //   route: 'sales/dashboards',
    //   title: 'Dashboards',
    // },
    {
      icon: 'power_settings_new',
      route: 'login',
      title: 'Log-out',
    }
  ];

  customerRoutes: ROUTE[] = [
    // {
    //   icon: 'contacts',
    //   route: 'sales/accounts',
    //   title: 'Accounts',
    // }, {
    //   icon: 'people',
    //   route: 'sales/contacts',
    //   title: 'Contacts',
    // }, {
    //   icon: 'settings_phone',
    //   route: 'sales/leads',
    //   title: 'Leads',
    // }, {
    //   icon: 'account_box',
    //   route: 'sales/opportunities',
    //   title: 'Opportunities',
    // }
  ];

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit() {
  }

  logout(title)
  {
  
    if(title=="Log-out")
    {
      localStorage.removeItem("usuario");
      
    }
  }
  public isAuthenticated() {
    
    return this.autenticacionService.autenticado();
  }
}
