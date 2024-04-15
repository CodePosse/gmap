import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {AccordionComponent} from "@stories/data-display/accordion/accordion.component";
import {CheckboxComponent} from "@stories/form-ui/checkbox/checkbox.component";
import {FormFieldComponent} from "@stories/form-ui/form-field/form-field.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {SeasonsFormComponent} from "./seasons-form/seasons-form.component";
import {SeasonsListComponent} from "./seasons-list/seasons-list.component";
import {CeSessionsService} from "./ce-sessions.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'gmap-ce-seasons',
  standalone: true,
  imports: [
    AccordionComponent,
    CheckboxComponent,
    FormFieldComponent,
    MatGridList,
    MatGridTile,
    SeasonsFormComponent,
    SeasonsListComponent
  ],
  templateUrl: './ce-seasons.component.html',
  styleUrl: './ce-seasons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CeSeasonsComponent implements OnInit {
  @Input({required: true}) breakpoint!: number;
  @Input({required: true}) clientWidth!: number;

  readonly lightYellow = '#FFBB4D';
  readonly lightBlue = '#CDFFF9';

  sessionsCount = 1;

  constructor(
    private readonly service: CeSessionsService
  ) {
  }

  ngOnInit(): void {
  }

  onCountChange(count: number) {
    this.service.setCount(count);
  }
}
