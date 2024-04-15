import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {JsonPipe, KeyValue, KeyValuePipe, NgClass} from "@angular/common";
import {INativeGridData} from "./native-grid.data";

@Component({
  selector: 'gmap-native-grid',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    KeyValuePipe,
    JsonPipe,
    NgClass
  ],
  templateUrl: './native-grid.component.html',
  styleUrl: './native-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NativeGridComponent {
  @Input() checkboxActive = '#cdfff9';
  @Input() checkboxInactive = '#D9D9D9';

  @Input() enablePrefixAction = true;
  @Input() enableCheckbox = true;
  @Input() highlightRow = false;

  @Input() data: INativeGridData[][] = [];

  @Input() prefixActionIcon = 'delete';
  @Output() prefixButtonClicked = new EventEmitter<INativeGridData[]>();

  @Input() checkboxActiveIcon = 'commit';
  @Input() checkboxInactiveIcon = 'circle';

  @Input() size: 'small' | 'medium' | 'large' = 'large';

  @Output() checkboxClicked = new EventEmitter<{
    active: boolean;
    row: INativeGridData[];
  }>();

  selection: { [x: number]: boolean } = {};

  protected inheritButtonChecked = false;

  protected get inheritButtonIconColor() {
    return this.inheritButtonChecked ? '#000000' : 'rgb(0 0 0 / 50%)';
  }

  constructor(
    private readonly cdr: ChangeDetectorRef
  ) {
  }

  displayLabel(item: KeyValue<string, any>) {
    return item.value.label;
  }

  displayValue(item: KeyValue<string, any>) {
    return item.value.value;
  }

  toggleCheck(item: INativeGridData[], index: number) {
    const active = !this.selection[index];
    this.checkboxClicked.emit({active: active, row: item});
    this.selection[index] = active;
    this.cdr.markForCheck();
  }
}
