import { Component } from '@angular/core';
import { AboutContent } from '../../components/about/about-content/about-content';

@Component({
    selector: 'app-about',
    imports: [AboutContent],
    templateUrl: './about.html',
    styleUrl: './about.css'
})
export class About {
    openResume() {
        const url = 'cv_francais.pdf';
        window.open(url, '_blank');
    }
}
