import { Component } from '@angular/core';
import { ContactContent } from '../../components/contact/contact-content/contact-content';

@Component({
    selector: 'app-contact',
    imports: [ContactContent],
    templateUrl: './contact.html',
    styleUrl: './contact.css'
})
export class Contact {

}
