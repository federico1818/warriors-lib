import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { Client } from 'passport'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        { provide: 'Client', useValue: new Client(2, 'cu6dRACLHNkut3X0fSvjHoj4vjM3mtUGofz1XVFO') }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
