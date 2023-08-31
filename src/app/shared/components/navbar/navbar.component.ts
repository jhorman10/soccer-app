import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isLogged = true;
  response: unknown;

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login().subscribe((res) => (this.response = res));
    Swal.fire({
      html: `${this.response}`,
    });
  }
}
