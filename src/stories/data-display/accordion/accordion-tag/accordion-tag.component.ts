import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgTemplateOutlet} from "@angular/common";
import {AccordionTheme} from "../accordion.component";

@Component({
  selector: 'gmap-accordion-tag',
  standalone: true,
  imports: [
    MatIcon,
    NgTemplateOutlet
  ],
  templateUrl: './accordion-tag.component.html',
  styleUrl: './accordion-tag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionTagComponent {
  @Input() theme: AccordionTheme = 'primary';
  @Input() tagLabel: string = 'Tag';
  @Input() tagValue: string = '1';
  @Input() tagIcon: string = 'arrow_upward';
  @Input() incrementerValue: number = 1;
}
