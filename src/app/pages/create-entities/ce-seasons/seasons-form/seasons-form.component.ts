import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {FormFieldComponent} from "@stories/form-ui/form-field/form-field.component";
import {CeSessionsService} from "../ce-sessions.service";

@Component({
  selector: 'gmap-seasons-form',
  standalone: true,
  imports: [
    MatGridTile,
    FormFieldComponent,
    MatGridList
  ],
  templateUrl: './seasons-form.component.html',
  styleUrl: './seasons-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeasonsFormComponent {
  @Input({required: true}) breakpoint!: number;
  @Input({required: true}) lightBlue!: string;
  @Input({required: true}) lightYellow!: string;

  constructor(
    private readonly service: CeSessionsService
  ) {
  }
}
