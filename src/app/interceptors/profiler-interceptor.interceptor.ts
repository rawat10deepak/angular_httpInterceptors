import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { ProfilerService } from './profiler.service';

@Injectable()
export class ProfilerInterceptorInterceptor implements HttpInterceptor {
  constructor(private profilerService: ProfilerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const startTime = Date.now();
    let ok: string;
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            ok = ' succeeded';
          }
        },
        (err) => (ok = 'failed')
      ),
      finalize(() => {
        const ellapsed = Date.now() - startTime;
        const msg = `${request.method}-${request.urlWithParams}-${ok}-in ${ellapsed} ms`;
        this.profilerService.log(msg); // logg all the http events
      })
    );
  }
}
