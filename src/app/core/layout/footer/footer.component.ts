import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsStoreService } from '../../../notifications/notifications-store.service';

@Component( {
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
} )
export class FooterComponent implements OnInit {

  public notificaciones$: Observable<any[]>;

  constructor( private notificationService: NotificationsStoreService ) { }

  ngOnInit(): void {
    this.notificaciones$ = this.notificationService.select$();
  }

}
