import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {AccordionComponent} from "@stories/data-display/accordion/accordion.component";
import {FormFieldComponent} from "@stories/form-ui/form-field/form-field.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {IconButtonComponent} from "@stories/form-ui/icon-button/icon-button.component";
import {AccordionTagComponent} from "@stories/data-display/accordion/accordion-tag/accordion-tag.component";
import {MatIcon} from "@angular/material/icon";
import {NativeGridComponent} from "@stories/tables/native-grid/native-grid.component";
import {INativeGridData} from "@stories/tables/native-grid/native-grid.data";
import {CeSessionsService} from "../ce-sessions.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'gmap-seasons-list',
  standalone: true,
  imports: [
    AccordionComponent,
    FormFieldComponent,
    MatGridList,
    MatGridTile,
    IconButtonComponent,
    AccordionTagComponent,
    MatIcon,
    NativeGridComponent
  ],
  templateUrl: './seasons-list.component.html',
  styleUrl: './seasons-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeasonsListComponent {
  @Input({required: true}) breakpoint!: number;
  @Input({required: true}) lightBlue!: string;
  @Input({required: true}) lightYellow!: string;

  sessions = [1];

  data: INativeGridData[][] = [
    [
      {label: 'ID', value: '1'},
      {label: 'Capacity', value: '10'},
      {label: 'First Name', value: 'Mark'},
      {label: 'Last Name', value: 'Otto'},
    ],
    [
      {label: 'ID', value: '2'},
      {label: 'Capacity', value: '20'},
      {label: 'First Name', value: 'Jacob'},
      {label: 'Last Name', value: 'Thornton'},
    ],
    [
      {label: 'ID', value: '3'},
      {label: 'Capacity', value: '30'},
      {label: 'First Name', value: 'Larry'},
      {label: 'Last Name', value: 'Bird'},
    ],
  ];

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly service: CeSessionsService
  ) {
    this.service.onSessionsChange
      .pipe(takeUntilDestroyed())
      .subscribe((count: number[]) => {
        this.sessions = count;
        this.cdr.markForCheck();
      });
  }
}
