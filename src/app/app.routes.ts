import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'projects', component: Projects },
    { path: 'projects/:id', component: Projects },
    { path: '**', component: NotFoundPage },
];
