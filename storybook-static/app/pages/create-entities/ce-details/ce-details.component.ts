import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {FormFieldComponent} from "@stories/form-ui/form-field/form-field.component";
import {IFieldSelectOption} from "@stories/form-ui/form-field/field-select-option";
import {AccordionComponent} from "@stories/data-display/accordion/accordion.component";
import {CheckboxComponent} from "@stories/form-ui/checkbox/checkbox.component";

@Component({
  selector: 'gmap-ce-details',
  standalone: true,
  imports: [
    MatGridTile,
    FormFieldComponent,
    AccordionComponent,
    MatGridList,
    CheckboxComponent
  ],
  templateUrl: './ce-details.component.html',
  styleUrl: './ce-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CeDetailsComponent {
  @Input({required: true}) breakpoint!: number;

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

  titleStatuses: IFieldSelectOption[] = [
    {value: '1', label: 'Active'},
    {value: '0', label: 'Inactive'}
  ];

  madeForMedia: IFieldSelectOption[] = [
    {value: 'tv', label: 'TV'},
    {value: 'film', label: 'Film'}
  ];

  firstReleasedMedia: IFieldSelectOption[] = [
    {value: 'tv', label: 'TV'},
    {value: 'film', label: 'Film'}
  ];
}
