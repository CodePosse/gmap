import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CdkAccordion, CdkAccordionItem} from "@angular/cdk/accordion";
import {MatIcon} from "@angular/material/icon";
import {FormFieldComponent} from "../../form-ui/form-field/form-field.component";
import {NgClass, NgTemplateOutlet} from "@angular/common";
import {AccordionTagComponent} from "@stories/data-display/accordion/accordion-tag/accordion-tag.component";

export type AccordionTheme = 'primary' | 'secondary';

@Component({
  selector: 'gmap-accordion',
  standalone: true,
  imports: [
    CdkAccordion,
    CdkAccordionItem,
    MatIcon,
    FormFieldComponent,
    NgClass,
    NgTemplateOutlet,
    AccordionTagComponent
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {
  @Input({required: true}) id = `accordion-${Math.random().toString(36).substring(2)}`;
  @Input() title = 'Details';
  @Input() expanded? = false;
  @Input() showIncrementer = false;
  @Input() theme: AccordionTheme = 'primary';
  @Input() contentMarginLeft = 0;
  @Input() incrementerWidth: string | undefined;

  @Input() incrementerValue = 1;
  @Output() incrementerValueChange = new EventEmitter<number>();

  // Tag
  @Input() tagLabel = 'Season';
  @Input() tagValue = '1';
  @Input() tagIcon = 'arrow_upward';
}
