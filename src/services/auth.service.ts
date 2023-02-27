import { Injectable } from "@angular/core";
import { User } from "src/models/User";
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient){ }

    login(user: User): Observable<{token : string, login: string}> {
        return this.http.post<{token : string, login: string}>("http://localhost:5272/api/metrics/login", user)
    }
}