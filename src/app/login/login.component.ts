import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  hide = true;
  constructor(private router: Router) { }
  login(): void {
    if (this.email === 'k@gmail.com' && this.password === 'kunal') {
      console.log("OK");

      // Set authentication status (you may use a service for authentication)
      // Navigate to the Home component
      this.router.navigate(['/home/about']);
    } else {
      alert('Invalid email or password');
    }
  }
}
