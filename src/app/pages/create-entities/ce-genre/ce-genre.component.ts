import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AccordionComponent} from "@stories/data-display/accordion/accordion.component";
import {NativeGridComponent} from "@stories/tables/native-grid/native-grid.component";
import {INativeGridData} from "@stories/tables/native-grid/native-grid.data";
import {mockNativeGridData2} from "../../../../mockdata/native-grid-data";

@Component({
  selector: 'gmap-ce-genre',
  standalone: true,
  imports: [
    AccordionComponent,
    NativeGridComponent
  ],
  templateUrl: './ce-genre.component.html',
  styleUrl: './ce-genre.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CeGenreComponent {
  genres: INativeGridData[][] = mockNativeGridData2;
}
