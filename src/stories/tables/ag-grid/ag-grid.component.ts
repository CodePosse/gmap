import {GridApi, ModuleRegistry} from '@ag-grid-community/core';
import {Component, Input} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {AdvancedSearchService} from '../../../app/services/advanced-search.service'

import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import {CsvExportModule} from "@ag-grid-community/csv-export";
import {AgGridAngular} from 'ag-grid-angular';

ModuleRegistry.registerModules([ClientSideRowModelModule, CsvExportModule]);

interface ICOldef {
  headerName?: String;
  field?: String;
  filter?: Boolean;
  floatingFilter?: boolean;
  editable?: boolean;
  hide?: boolean;
  suppressColumnsToolPanel?: boolean;
  sortable?: boolean;
}

@Component({
  selector: 'gmap-ag-grid',
  standalone: true,
  imports: [AgGridAngular, MatMenuModule, MatButtonModule, MatIconModule, MatExpansionModule],
  providers: [AdvancedSearchService],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.scss'
})

export class AgGridComponent {
  private gridApi!: GridApi<any>;
  pinnedTopRowData: any
  @Input() gridStyle: string = 'ag-theme-balham';
  @Input() rowData = [{}];
  @Input() showVerticalScroll: boolean = false;
  @Input() showHorizontalScroll: boolean = true;
  @Input() colDefs: any = [];
  @Input() rowSelection: string = 'single';
  @Input() showExportButton: boolean = true
  @Input() showTempleteSelection: boolean = true;
  @Input() templates: any = {};


  rowcount() {
    this.pinnedTopRowData = [
      {
        "id": this.gridApi.getDisplayedRowCount() + " Results "
      },
    ]
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  onBtnExport() {
    var params = {
      "skipPinnedTop": false,
      "skipPinnedBottom": false
    };
    this.gridApi.exportDataAsCsv(params);
  }

  changeTemplate(template: string) {
    if (this.templates[template]) {
      let displayArray: any = []
      var selectedTemplate = this.templates[template];
      console.log(selectedTemplate)
      displayArray = this.colDefs.map((value: any) => {
        let field: any = value?.field;
        value.hide = !selectedTemplate[field]
        return value;
      })
      this.gridApi.setGridOption("columnDefs", displayArray);
    }
  }

}
