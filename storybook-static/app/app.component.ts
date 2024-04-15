import {Component} from '@angular/core';
import {HeaderComponent, HeaderType} from "../stories/layout/header/header.component";
import {IMenuItem} from "../stories/layout/sidebar/menu-item";
import {SidebarComponent} from "../stories/layout/sidebar/sidebar.component";
import {RouterModule} from '@angular/router';

@Component({
  selector: 'gmap-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  notifyCount = 4;
  profileButtonColor = '#ffbb4d';
  notifyBadgeOverlap = true;
  logoWidth = 150;
  logoMargin = 30;
  type: HeaderType = 'search';

  readonly searchOptions = [
    {value: 'all', label: 'All'},
    {value: 'title', label: 'Title'},
    {value: 'author', label: 'Author'},
    {value: 'publisher', label: 'Publisher'},
    {value: 'isbn', label: 'ISBN'},
  ];

  readonly menuItems: IMenuItem[] = [
    {label: 'Create Entities', icon: 'add_circle_outline', type: 'link', link: '/create-entities'},
    {label: 'Bulk Create', icon: 'add_circle_outline', type: 'link', link: '/bulk-create'},
    {label: 'Saved Dashboards', icon: 'space_dashboard', type: 'link', link: '/saved-dashboards'},
    {label: 'Advanced Search', icon: 'manage_search', type: 'link', 'link': '/advanced-search'},
    {label: 'Data Model', icon: 'database', type: 'link', link: '/data-model'},
    {label: 'Rules & Governance', icon: 'data_object', type: 'link', link: '/rules-governance'},
    {label: 'Permissions & Security', icon: 'encrypted', type: 'link', link: '/permissions-security'},
  ];
}
