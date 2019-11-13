import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((navigationEnd: NavigationEnd) => this.currentUrl = navigationEnd.url);
  }

  ngOnInit() {
  }

}
