import {Injectable} from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    constructor(public auth:AuthServiceService){};
    intercept(req:HttpRequest<any>,next:HttpHandler):
    Observable<HttpEvent<any>>{
        req = req.clone({
            setHeaders:{
                Token:this.auth.getToken() 
            }
        });
      return next.handle(req);
    }
}
