import { Component } from '@angular/core';

@Component({
    selector: 'app-contact-content',
    imports: [],
    templateUrl: './contact-content.html',
    styleUrl: './contact-content.css'
})
export class ContactContent {
    copyEmail() {
        const email = "nathan.gros6@gmail.com";
        navigator.clipboard.writeText(email);
    }
}
