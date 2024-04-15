import {Component, ElementRef} from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {FormFieldComponent} from "../../form-ui/form-field/form-field.component";
import {IFieldSelectOption} from "../../form-ui/form-field/field-select-option";
import {CheckboxComponent} from "../../form-ui/checkbox/checkbox.component";
import {AccordionComponent} from "../../data-display/accordion/accordion.component";
import {IconButtonComponent} from "../../form-ui/icon-button/icon-button.component";
import {IMenuItem} from "../../layout/sidebar/menu-item";
import {NativeGridComponent} from "../../tables/native-grid/native-grid.component";
import {INativeGridData} from "../../tables/native-grid/native-grid.data";
import {mockNativeGridData} from "../../../mockdata/native-grid-data";

@Component({
  selector: 'gmap-create-entities',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    FormFieldComponent,
    CheckboxComponent,
    AccordionComponent,
    IconButtonComponent,
    NativeGridComponent
  ],
  templateUrl: './create-entities.component.html',
  styleUrl: './create-entities.component.scss'
})
export class CreateEntitiesComponent {
  languages: IFieldSelectOption[] = [
    {value: 'en', label: 'English'},
    {value: 'es', label: 'Spanish'},
    {value: 'fr', label: 'French'},
    {value: 'de', label: 'German'}
  ];

  genres: IFieldSelectOption[] = [
    {value: 'action', label: 'Action'},
    {value: 'comedy', label: 'Comedy'},
    {value: 'drama', label: 'Drama'},
    {value: 'horror', label: 'Horror'}
  ];

  locked: IFieldSelectOption[] = [
    {value: '1', label: 'Locked', prefixIcon: 'lock'},
    {value: '0', label: 'Unlocked', prefixIcon: 'lock_open'},
  ]

  colorGroups: IFieldSelectOption[] = [
    {value: 'bw', label: 'Black & White'},
    {value: 'color', label: 'Color'}
  ];

  types: IFieldSelectOption[] = [
    {value: 'tv', label: 'TV Series'},
    {value: 'movie', label: 'Movie'},
  ];

  menu: IMenuItem[] = [
    {label: 'Option 1', type: 'link'},
    {label: 'Option 2', type: 'link'},
    {label: 'Option 3', type: 'link'}
  ];

  tenants: INativeGridData[][] = mockNativeGridData;

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
