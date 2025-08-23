import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PROJECTS } from '../../../data/projects.data';
import { Project } from '../../../models/project.model';
import { ProjectCard } from '../../components/projects/project-card/project-card';
import { HomeContent } from '../../components/home/home-content/home-content';

@Component({
    selector: 'app-home',
    imports: [CommonModule, ProjectCard, HomeContent],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class Home {
    projects = PROJECTS;
    sortedProjects = [...this.projects].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    recentProjects = this.sortedProjects.slice(0, 2);


    constructor(private router: Router) { }

    goToProject(project: Project) {
        this.router.navigate(['/projects', project.id]);
    }
}
