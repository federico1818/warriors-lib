import { Injectable, Inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Credentials } from './credentials'
import { Client } from './client'

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    constructor(
        protected http: HttpClient,
        @Inject('Client') protected client: Client
    ) {}
    
    public invoke(credentials: Credentials): Observable<any> {
        return this.http.post('http://localhost:8000/oauth/token', {
                ...this.client,
                ...credentials,
                grant_type: 'password'
            })
    }

}
