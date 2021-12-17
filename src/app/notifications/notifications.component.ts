import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { Notification } from '../models/Notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.sass']
})
export class NotificationsComponent implements OnInit {
  notification = { message: "Default Message", type: "alert-primary", hide: true };

  constructor(
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
      this.subscribeToService();
  }

  subscribeToService() {
    this.notificationService.getNotification$().subscribe(data => {
      this.notification = data;
    });
  }

  clearNotification() {
    this.notification.hide = true;
  }

}
