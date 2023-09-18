import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { TechnologiesPageComponent } from './pages/technologies-page/technologies-page.component';
import { LangsPageComponent } from './pages/langs-page/langs-page.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent
    },
    {
        path: 'resume',
        component: ResumePageComponent
    },
    {
        path: 'technologies',
        component: TechnologiesPageComponent,
    },
    {
        path: 'languages',
        component: LangsPageComponent
    }

];
