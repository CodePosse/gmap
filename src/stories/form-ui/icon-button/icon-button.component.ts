import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {IMenuItem} from "../../layout/sidebar/menu-item";
import {MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink} from "@angular/router";

export type IconButtonType = 'Plain' | 'Menu';

@Component({
  selector: 'gmap-icon-button',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatMenuModule,
    RouterLink
  ],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {
  @Input() icon!: string;
  @Input() type: IconButtonType = 'Plain';
  @Input() menu: IMenuItem[] = [];

  @Output() click = new EventEmitter<void>();
}
