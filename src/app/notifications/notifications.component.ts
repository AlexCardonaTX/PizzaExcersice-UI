import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.sass']
})
export class NotificationsComponent implements OnInit {
  notification = { message: "Default Message", type: "alert-primary", hide: true };

  constructor() { }

  ngOnInit(): void {
      
  }

}
