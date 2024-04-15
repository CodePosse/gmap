import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MatIconModule} from "@angular/material/icon";
import {ISearchOption} from "./search-option";

export type HeaderType = 'search' | 'actions' | 'blank';

@Component({
  selector: 'gmap-header',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input({required: true}) type: HeaderType = 'blank';

  @Input() profileButtonColor = '#ffbb4d';
  @Input() notifyBadgeOverlap = true;
  @Input() notifyCount = 0;

  // In pixels
  @Input() logoWidth = 150;
  @Input() logoMargin = 30;

  // Search
  @Input() searchInputPlaceholder = 'Search by keywords, titles, etc. Then press Enter';
  @Input() searchOptions: ISearchOption[] = [];

  // Actions
  @Input() title = 'Title';
  @Input() cancelText = 'Cancel';
  @Input() saveText = 'Save';
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  get isLightGray() {
    return this.type === 'search';
  }
}
