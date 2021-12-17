import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Notification } from '../models/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  defaultValue: Notification = { message: "Default", type: "", hide: true };
  _notificationSubject: BehaviorSubject<Notification> = new BehaviorSubject(this.defaultValue);

  constructor() { }

  public newNotification(notification: Notification) {
    this._notificationSubject.next(notification);
  }

  public getNotification$() {
    return this._notificationSubject.asObservable();
  }

}
