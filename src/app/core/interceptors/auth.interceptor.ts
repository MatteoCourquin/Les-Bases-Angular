import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../service/auth.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const headers = new HttpHeaders()
            .append('Authorization', `Bearer ${this.auth.getToken()}`)
            
        const modifiedReq = req.clone({ headers })

        return next.handle(modifiedReq)
    }
}