import {Component, ElementRef} from '@angular/core';
import {IFieldSelectOption} from "@stories/form-ui/form-field/field-select-option";
import {IMenuItem} from "@stories/layout/sidebar/menu-item";
import {FormFieldComponent} from "@stories/form-ui/form-field/form-field.component";
import {IconButtonComponent} from "@stories/form-ui/icon-button/icon-button.component";
import {CeDetailsComponent} from "./ce-details/ce-details.component";
import {CeFinanceComponent} from "./ce-finance/ce-finance.component";
import {CeTenantComponent} from "./ce-tenant/ce-tenant.component";
import {CeGenreComponent} from "./ce-genre/ce-genre.component";
import {CeSeasonsComponent} from "./ce-seasons/ce-seasons.component";

@Component({
  selector: 'gmap-create-entities',
  standalone: true,
  imports: [
    FormFieldComponent,
    IconButtonComponent,
    CeDetailsComponent,
    CeFinanceComponent,
    CeTenantComponent,
    CeGenreComponent,
    CeSeasonsComponent
  ],
  templateUrl: './create-entities.component.html',
  styleUrl: './create-entities.component.scss'
})
export class CreateEntitiesComponent {
  types: IFieldSelectOption[] = [
    {value: 'tv', label: 'TV Series'},
    {value: 'movie', label: 'Movie'},
  ];

  menu: IMenuItem[] = [
    {label: 'Option 1', type: 'link'},
    {label: 'Option 2', type: 'link'},
    {label: 'Option 3', type: 'link'}
  ];

  constructor(
    private readonly element: ElementRef
  ) {
  }

  get clientWidth(): number {
    return this.element.nativeElement?.clientWidth || 0;
  }

  get breakpoint(): number {
    return this.clientWidth <= 1000 ? 4 : 6;
  }
}
