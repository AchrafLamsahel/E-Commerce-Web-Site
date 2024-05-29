import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
/** 
  constructor(private router: Router) { }

  logout() {
    // Supposons que le jeton d'authentification soit stocké dans le localStorage
    localStorage.removeItem('authToken');
    
    // Redirige vers la page de connexion
    this.router.navigate(['/login']);
  }
*/
}
