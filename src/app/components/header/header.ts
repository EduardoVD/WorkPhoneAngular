import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  imports: [FormsModule],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  authService = inject(AuthService);

  isLoginModalOpen = false;
  username = '';
  password = '';
  errorMessage = '';

  openLoginModal() {
    this.isLoginModalOpen = true;
    this.errorMessage = '';
  }

  closeLoginModal() {
    this.isLoginModalOpen = false;
    this.errorMessage = '';
  }

  handleLogin(event: Event) {
    event.preventDefault();
    if (!this.username.trim() || !this.password.trim()) {
      this.errorMessage = 'Por favor, preencha o nome e a senha.';
      return;
    }

    this.authService.login(this.username.trim());
    this.isLoginModalOpen = false;
    this.username = '';
    this.password = '';
    this.errorMessage = '';
  }

  logout() {
    this.authService.logout();
  }
}


