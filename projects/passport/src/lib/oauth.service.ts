import { Injectable } from '@angular/core'

import { Auth } from './auth'
import { LoginService } from './login.service'
import { Credentials } from './credentials'

@Injectable({
    providedIn: 'root'
})

export class OauthService implements Auth {
    
    constructor(
        protected loginService: LoginService
    ) {}

    public login(credentials: Credentials): void {
        this.loginService.invoke(credentials).subscribe(res => {
            console.log(res)
        })
    }
    
}