import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  autoSlideInterval: any;

  projects = [
    {
      title: '🧠 SecVision',
      stack: ['Unity (VR)'],
      description: 'A VR cybersecurity awareness platform for immersive training using real-world threat scenarios.',
      github: '',
      demo: '',
      category: 'Final Year Project',
      images: [
        'assets/FYP/secvision1.jpg',
        'assets/FYP/secvision2.jpg',
        'assets/FYP/secvision3.jpg',
        'assets/FYP/secvision4.jpg',
        'assets/FYP/secvision5.jpg',
        'assets/FYP/secvision6.jpg',
        'assets/FYP/secvision7.jpg',
        'assets/FYP/secvision8.jpg',
        'assets/FYP/secvision9.jpg',
      ]
    },
    {
      title: '🎵 Studitify',
      stack: ['PHP', 'XAMPP', 'MySQL'],
      description: 'A music-sharing platform built for students. Upload, explore, and listen to music in real-time.',
      github: 'https://github.com/PanASonix24434/Studytify',
      demo: '',
      category: 'Website'
    },
    {
      title: '✅ Halal Food Scanner',
      stack: ['JSP', 'Google Maps API', 'MySQL', 'Java', 'Apache Tomcat','Json'],
      description: 'Tool to detect halal-certified food locations using map data and categorized filters.',
      github: 'https://github.com/PanASonix24434/Halal-Food-Checker',
      demo: '',
      category: 'Website'
    },
    {
  title: 'Image Encryption',
  stack: ['PHP', 'Encryption'],
  description: 'An assignment project that allows users to encrypt images securely and decrypt them back to their original form. Demonstrates fundamental cryptography concepts applied to image files.',
  github: 'https://github.com/PanASonix24434/Image-encryption',
  demo: '',
  category: 'Cryptography'
},
{
  title: '🔒 Secure Login System',
  stack: ['JSP', 'MySQL', 'Apache Tomcat', 'bcrypt'],
  description: 'A cryptography assignment implementing a secure login system using bcrypt for password hashing. Built with JSP for the frontend/backend, MySQL for database, and deployed on Apache Tomcat.',
  github: 'https://github.com/PanASonix24434/Bycryt-encryption',
  demo: '',
  category: 'Cryptography'
}
  ];

  categories = ['Final Year Project', 'Website', 'Cryptography'];

  projectsByCategory(category: string) {
    return this.projects.filter(p => p.category === category);
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextImage();
    }, 4000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextImage() {
    const images = this.projects[0]?.images;
    if (images && images.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % images.length;
    }
  }

  selectImage(index: number) {
    this.currentIndex = index;
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
