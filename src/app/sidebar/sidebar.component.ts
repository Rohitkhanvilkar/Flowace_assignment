import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  matters_display: boolean = false;
  timesheet_display: boolean = false;
  insight_display: boolean = false;
  admin_display: boolean = false;
  options_display: boolean = false;

  matters() {
    this.matters_display = !this.matters_display
  }
  timesheet() {
    this.timesheet_display = !this.timesheet_display
  }
  insight() {
    this.insight_display = !this.insight_display
  }
  admin() {
    this.admin_display = !this.admin_display
  }
  options() {
    this.options_display = !this.options_display;
  }



}
