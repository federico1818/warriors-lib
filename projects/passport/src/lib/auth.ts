import { Credentials } from './credentials'

export interface Auth {
    login(credentials: Credentials): void
}