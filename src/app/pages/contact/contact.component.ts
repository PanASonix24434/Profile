import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  honeypot: string = '';
  isLoading: boolean = false;
  showToast: boolean = false;
  showInvalidEmail: boolean = false;

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async onSubmit() {
    if (!this.name || !this.email || !this.message) {
      alert('Please fill in all fields.');
      return;
    }

    if (!this.isValidEmail(this.email)) {
      this.showInvalidEmail = true;
      setTimeout(() => (this.showInvalidEmail = false), 3000);
      return;
    }

    if (this.honeypot) return;

    this.isLoading = true;

    try {
      const res = await fetch('https://formspree.io/f/mblobjyz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message,
          _honeypot: this.honeypot
        })
      });

      if (res.ok) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        this.showToast = true;
        setTimeout(() => (this.showToast = false), 3000);
        this.name = '';
        this.email = '';
        this.message = '';
        this.honeypot = '';
      } else {
        alert('Failed to send message.');
      }
    } catch {
      alert('Something went wrong.');
    } finally {
      this.isLoading = false;
    }
  }
}
