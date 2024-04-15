import {Component, Input} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatNavList} from "@angular/material/list";
import {NgOptimizedImage} from "@angular/common";
import {MatIconButton} from "@angular/material/button";
import {IMenuItem} from "./menu-item";
import {ActivatedRoute, Router, RouterModule} from '@angular/router';

export type SideBarBackground = 'white' | 'light-gray';

@Component({
  selector: 'gmap-sidebar',
  standalone: true,
  imports: [
    MatDrawer,
    MatIcon,
    MatListItem,
    MatNavList,
    NgOptimizedImage,
    MatIconButton,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() collapsed = false;
  @Input() background: SideBarBackground = 'white';
  @Input() menu: IMenuItem[] = [];

  constructor(
    private readonly router: Router
  ) {
  }

  selectMenu(item: IMenuItem) {
    if (!item.link) return;
    void this.router.navigate([item.link]);
  }
}
