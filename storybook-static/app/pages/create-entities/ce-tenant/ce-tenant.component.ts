import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NativeGridComponent} from "@stories/tables/native-grid/native-grid.component";
import {AccordionComponent} from "@stories/data-display/accordion/accordion.component";
import {INativeGridData} from "@stories/tables/native-grid/native-grid.data";
import {mockNativeGridData} from "../../../../mockdata/native-grid-data";

@Component({
  selector: 'gmap-ce-tenant',
  standalone: true,
  imports: [
    NativeGridComponent,
    AccordionComponent
  ],
  templateUrl: './ce-tenant.component.html',
  styleUrl: './ce-tenant.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CeTenantComponent {
  tenants: INativeGridData[][] = mockNativeGridData;
}
