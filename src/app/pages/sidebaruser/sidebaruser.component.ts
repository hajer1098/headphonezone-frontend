import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebaruser',
  templateUrl: './sidebaruser.component.html',
  styleUrls: ['./sidebaruser.component.scss']
})
export class SidebaruserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(sidebar: HTMLElement): void {
    sidebar.classList.toggle('active');
  }

}
