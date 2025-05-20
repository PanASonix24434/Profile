import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 0 } },
  { path: 'about', component: AboutComponent, data: { animation: 1 } },
  { path: 'skills', component: SkillsComponent, data: { animation: 2 } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 3 } },
  { path: 'resume', component: ResumeComponent, data: { animation: 4 } },
  { path: 'contact', component: ContactComponent, data: { animation: 5 } }
];
