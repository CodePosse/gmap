import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCheckbox} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'gmap-checkbox',
  standalone: true,
  imports: [
    MatCheckbox,
    FormsModule
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  @Input() checked = false;
  @Input() indeterminate = false;
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Input() disabled = false;
  @Input() label = 'Checkbox';

  @Output() change = new EventEmitter<boolean>();
}
