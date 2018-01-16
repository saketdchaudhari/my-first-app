import { Component } from '@angular/core';

@Component({
    selector: 'app-warning',
    template: `
        <p> This is warning component</p>
    `,
    styles: [
        `
            p {
                background-color: mistyrose;
                border: 1px solid red;
                padding: 20px;
            }
        `
    ]
    
})

export class WarningComponent {

}