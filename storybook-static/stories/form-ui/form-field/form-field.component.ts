import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect, MatSelectTrigger} from "@angular/material/select";
import {IFieldSelectOption} from "./field-select-option";
import {NgClass} from "@angular/common";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";
import {FormsModule} from "@angular/forms";
import {TextMaskDirective} from "./text-mask.directive";
import {Moment} from "moment/moment";
import moment from "moment";
import {MatIconButton} from "@angular/material/button";

export type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';
export type FormFieldType =
  'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url'
  | 'textarea'
  | 'select'
  | 'datepicker'
  | 'mask'
  | 'year-picker';

export const YEAR_MODE_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'gmap-form-field',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatInput,
    MatSuffix,
    MatSelect,
    MatOption,
    NgClass,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    FormsModule,
    MatSelectTrigger,
    TextMaskDirective,
    MatIconButton
  ],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  providers: [
    provideNativeDateAdapter()
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent {
  @Input({required: true}) id = `form-field-${Math.random().toString(36).substring(2)}`;
  @Input() type: FormFieldType = 'text';
  @Input() placeholder = 'Placeholder';
  @Input() label = 'Label';
  @Input() labelColor = '#323232';
  @Input() labelTextTransform: TextTransform = 'uppercase';
  @Input() size: 'normal' | 'large' = 'normal';
  @Input() value: any = '';
  @Input() options: IFieldSelectOption[] = [];
  @Input() width: string | undefined;

  @Input() mask = [/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/];

  @Input() darkMode = false;
  @Input() showInheritButton = false;
  @Input() showIncrementDecrementButtons = false;

  @Input() inheritButtonBackground = '#cdfff9';
  @Input() inputBackground = 'white';

  @Output() valueChange = new EventEmitter<any>();

  min = 0;
  max = 100;

  protected inheritButtonChecked = false;

  // Checked 100 and unchecked 75 percent black
  protected get inheritButtonIconColor() {
    return this.inheritButtonChecked ? '#000000' : 'rgb(0 0 0 / 50%)';
  }

  get panelClass() {
    return this.darkMode ? 'custom-select-panel dark' : 'custom-select-panel';
  }

  get prefixIcon() {
    return this.options.find(option => option.value === this.value)?.prefixIcon || null;
  }

  get selectedOption() {
    return this.options.find(option => option.value === this.value);
  }

  yearSelectedHandler(chosenDate: Moment, datepicker: MatDatepicker<Moment>) {
    if (this.type !== 'year-picker') return;
    datepicker.select(chosenDate);
    this.value = moment(chosenDate).format('YYYY');
    datepicker.close();
  }

  increment($event: MouseEvent) {
    this.value = this.value + 1;
    this.valueChange.emit(this.value);
    $event.stopPropagation();
  }

  decrement($event: MouseEvent) {
    this.value = this.value - 1;
    this.valueChange.emit(this.value);
    $event.stopPropagation();
  }
}
