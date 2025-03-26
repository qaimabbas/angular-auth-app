// import { Injectable } from '@angular/core';
// import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
// import {Observable, switchMap} from 'rxjs';
// import {TokenService} from '../services/token.service';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthInterceptorService implements HttpInterceptor{
//
//   constructor(private tokenService: TokenService) { }
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log(" interceptor works ")
//     return this.tokenService.getToken().pipe(
//       switchMap((token:string)=> {
//         console.log("token in interceptor"+token)
//           const cloned = req.clone({
//             setHeaders: {
//               Authorization: `Bearer ${token}`
//             }
//           });
//         return next.handle(cloned);
//         }
//       )
//     )
//   }
// }
