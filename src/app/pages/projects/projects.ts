import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../../data/projects.data';
import { Project } from '../../../models/project.model';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProjectCard } from '../../components/projects/project-card/project-card';

@Component({
    selector: 'app-projects',
    imports: [CommonModule, MarkdownModule, ProjectCard],
    templateUrl: './projects.html',
    styleUrl: './projects.css'
})
export class Projects implements OnInit {
    projects = PROJECTS;
    sortedProjects = [...this.projects].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    selectedProject: Project | null = null;

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const projectId = params.get('id');
            if (projectId) {
                const project = this.sortedProjects.find(p => p.id === projectId);
                if (project) {
                    this.openProject(project);
                    this.selectedProject = project;
                }
            }
        });
    }

    openProject(project: Project) {
        this.router.navigate(['/projects', project.id], { replaceUrl: false });
        if (this.selectedProject) {
            this.selectedProject = null;
            setTimeout(() => {
                this.selectedProject = project;
            }, 300);
        }
        else {
            this.selectedProject = project;
        }
    }

    closeProject() {
        this.selectedProject = null;
        this.router.navigate(['/projects'], { replaceUrl: false });
    }
}
