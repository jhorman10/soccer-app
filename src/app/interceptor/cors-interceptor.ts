import {
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });

    const corsReq = req.clone({ headers });
    return next.handle(corsReq);
  }
}
