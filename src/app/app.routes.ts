import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';

export const routes: Routes = [
    { path: '', component: Home },
    {
        path: 'projects', component: Projects, children: [
            { path: ':id', component: Projects },
        ]
    },
    { path: 'contact', component: Contact },
    { path: 'about', component: About },
    { path: '**', component: NotFoundPage },
];
