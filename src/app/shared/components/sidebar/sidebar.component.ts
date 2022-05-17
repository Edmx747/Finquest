import { SIDEBAR_ITEMS } from './../../models/sidebar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public sidebarItems = SIDEBAR_ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

}
