import { Injectable } from '@angular/core'

import { Auth } from './auth'
import { LoginService } from './login.service'

@Injectable({
    providedIn: 'root'
})

export class OauthService implements Auth {
    
    constructor(
        protected loginService: LoginService
    ) {}

    public login(): void {
        this.loginService.invoke().subscribe(res => {
            console.log(res)
        })
    }
    
}