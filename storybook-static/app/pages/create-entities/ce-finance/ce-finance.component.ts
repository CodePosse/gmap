import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {AccordionComponent} from "@stories/data-display/accordion/accordion.component";
import {CheckboxComponent} from "@stories/form-ui/checkbox/checkbox.component";
import {FormFieldComponent} from "@stories/form-ui/form-field/form-field.component";

@Component({
  selector: 'gmap-ce-finance',
  standalone: true,
  imports: [
    MatGridTile,
    AccordionComponent,
    MatGridList,
    CheckboxComponent,
    FormFieldComponent
  ],
  templateUrl: './ce-finance.component.html',
  styleUrl: './ce-finance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CeFinanceComponent {
  @Input({required: true}) breakpoint!: number;
  @Input({required: true}) clientWidth!: number;
}
