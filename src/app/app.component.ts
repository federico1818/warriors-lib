import { Component } from '@angular/core'
import { OauthService } from 'passport'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    constructor(
        protected authService: OauthService
    ){}

    public login(): void {
        this.authService.login()
    }
}
