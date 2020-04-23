import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { NotificationsStoreService } from './notifications-store.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor( private notificationService: NotificationsStoreService ) { }

  public intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    return next.handle( req ).pipe( filter( x => x['type'] != 0 ), tap( r => this.notificar( r ) ) );
  }

  private notificar( r: HttpEvent<any> ) {
    const mensaje = 'Status (' + r['status'] + '): ' + r['statusText'] + '; URL: ' + r['url'];
    this.notificationService.dispatchNotification( mensaje );
  }
}
