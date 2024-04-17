import { Component, NgModule, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, IUser } from '../../services';
import { UserPanelModule } from '../user-panel/user-panel.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';

import { Router } from '@angular/router';
import { DxTextBoxModule } from 'devextreme-angular';
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  backButtonOptions = {
    icon: 'back',
    onClick() {
      showMessage('Back');
    }
  }

  textBoxOptions = {
    name: 'quick-search-filter-text',
    showClearButton: true
  }

  searchButtonOptions = {
    text: 'search',
  }

  aboutButtonOptions = {
    icon: 'info',
    text: 'About',
    onClick() {
      showMessage('About');
    }
  }

  profileButtonOptions = {
    icon: 'user',
    text: 'Profile',
    onClick() {
      showMessage('Profile');
    }
  }

  settingsButtonOptions = {
    icon: 'preferences',
    text: 'Settings',
    onClick() {
      showMessage('Settings');
    }
  }

  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  @Input()
  title!: string;

  user: IUser | null = { email: '' };

  userMenuItems = [{
    text: 'Profile',
    icon: 'user',
    onClick: () => {
      this.router.navigate(['/profile']);
    }
  },
  {
    text: 'Logout',
    icon: 'runner',
    onClick: () => {
      this.authService.logOut();
    }
  }];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getUser().then((e) => this.user = e.data);
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  }
}

function showMessage(name: string) { };

@NgModule({
  imports: [
    CommonModule,
    DxButtonModule,
    UserPanelModule,
    DxToolbarModule,
    DxTextBoxModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})

export class HeaderModule { }
