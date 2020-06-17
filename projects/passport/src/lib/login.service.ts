import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    protected data = {
        client_id: 2,
        client_secret: 'cu6dRACLHNkut3X0fSvjHoj4vjM3mtUGofz1XVFO',
        grant_type: 'password',
        username: 'yamcha@dbz.com',
        password: '1234'
    }

    constructor(
        protected http: HttpClient
    ) {}
    
    public invoke(): Observable<any> {
        return this.http
            .post('http://localhost:8000/oauth/token', this.data)
    }

}
