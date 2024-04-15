import {Component} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {AdvancedSearchService} from '../../services/advanced-search.service'
import {ColDef} from 'ag-grid-community';
import {AgGridComponent} from "../../../stories/tables/ag-grid/ag-grid.component";
import {mockColDef} from '../../../mockdata/mock-advance-search-data';
import {AccordionComponent} from "../../../stories/data-display/accordion/accordion.component";

interface ISearchData {
  id?: string,
  mpm: string,
  title_full_name?: string,
  title_type?: string,
  title_level?: String,
  title_status?: String,
  primary_language?: String,
  release_year?: String,
  run_time?: String,
  imdb_id?: String,
  title_eidr?: String,
}

@Component({
  selector: 'gmap-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrl: './advance-search.component.scss',
  standalone: true,
  imports: [MatExpansionModule, AgGridComponent, AccordionComponent],
  providers: [AdvancedSearchService],

})
export class AdvanceSearchComponent {
  pinnedTopRowData: any;
  rowData: ISearchData[] = [];
  colDefs: ColDef[] = [];
  showVerticalScroll = false;
  showHorizontalScroll = true;
  gridStyle = "ag-theme-balham"
  rowSelection = "single"
  template: any;
  templates = {};

  constructor(private advancedSearchService: AdvancedSearchService) {
    this.templates = this.advancedSearchService.getTemplate();
    this.rowData = this.advancedSearchService.getSearchResult();
    this.colDefs = mockColDef;
  }

}
