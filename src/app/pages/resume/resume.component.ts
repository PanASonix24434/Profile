import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe'; // Adjust relative path as needed

interface Certificate {
  title: string;
  file: string;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  // Certificates list
  certificates: Certificate[] = [
    {
      title: 'Professional Android App Development (2024)',
      file: 'assets/files/Developer.pdf'
    }
  ];

  // Certificate modal state
  showCertModal = false;
  selectedCert: Certificate | null = null;

  openCertModal(cert: Certificate) {
    this.selectedCert = cert;
    this.showCertModal = true;
  }

  closeCertModal() {
    this.showCertModal = false;
    this.selectedCert = null;
  }

  // Download confirmation modal state and methods
  showConfirmModal = false;

  openConfirmModal() {
    this.showConfirmModal = true;
  }

  cancelDownload() {
    this.showConfirmModal = false;
  }

  confirmDownload() {
    this.downloadResume();
    this.showConfirmModal = false;
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/files/resume-mohamad-norfadzly.pdf'; // Make sure this file exists
    link.download = 'resume-mohamad-norfadzly.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
