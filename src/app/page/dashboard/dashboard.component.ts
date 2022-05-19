import { SidebarItem } from './../../shared/interfaces/sidebar';
import { SIDEBAR_ITEMS } from './../../shared/models/sidebar';
import { Component, OnInit} from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  public sidebarItems: SidebarItem[] = SIDEBAR_ITEMS;
  public showSidenav?: boolean;
  constructor(public breakpointObserver: BreakpointObserver) {
  }
  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 480px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showSidenav = true;
        } else {
          this.showSidenav = false;
        }
      });
  }
}
