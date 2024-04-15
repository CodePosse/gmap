import {applicationConfig, Meta, StoryObj} from '@storybook/angular';
import {AgGridComponent} from "./ag-grid.component";
import {provideAnimations} from "@angular/platform-browser/animations";
import {mockAdvanceSearch, mockColDef, mockTemplateData} from '../../../mockdata/mock-advance-search-data';

const meta: Meta<AgGridComponent> = {
  title: 'Tables/AgGrid',
  component: AgGridComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    colDefs: {
      control: {
        type: 'object',
      },
    },
    rowData: {
      control: {
        type: 'object',
      },
    },
    templates: {
      control: {
        type: 'object',
      },
    },
    gridStyle: {
      control: {type: 'text'}
    },
    showVerticalScroll: {
      control: 'radio',
      options: [true, false],
    },
    showHorizontalScroll: {
      control: 'radio',
      options: [true, false],
    },
    rowSelection: {
      control: 'radio',
      options: ['single', 'multiple']
    },
    showExportButton: {
      control: 'radio',
      options: [true, false]
    },
    showTempleteSelection: {
      control: 'radio',
      options: [true, false]
    },
  },

};

export default meta;
type Story = StoryObj<AgGridComponent>;

export const AgGrid: Story = {
  args: {
    colDefs: mockColDef,
    rowData: mockAdvanceSearch,
    templates: mockTemplateData,
    gridStyle: 'ag-theme-balham',
    showVerticalScroll: true,
    showHorizontalScroll: true,
    rowSelection: 'single',
    showExportButton: true,
    showTempleteSelection: true,
  },
};
