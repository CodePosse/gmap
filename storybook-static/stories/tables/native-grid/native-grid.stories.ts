import {applicationConfig, Meta, StoryObj} from '@storybook/angular';
import {provideAnimations} from "@angular/platform-browser/animations";
import {NativeGridComponent} from "./native-grid.component";
import {mockNativeGridData} from "../../../mockdata/native-grid-data";

const meta: Meta<NativeGridComponent> = {
  title: 'Tables/Native Grid',
  component: NativeGridComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    data: {
      name: 'Data',
      description: 'Data to display in the grid',
      control: {
        type: 'object'
      }
    },
    size: {
      name: 'Size',
      description: 'Size of the grid',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    checkboxActive: {
      name: 'Checkbox Active Background',
      description: 'Color of the active checkbox',
      control: {
        type: 'color'
      }
    },
    checkboxInactive: {
      name: 'Checkbox Inactive Background',
      description: 'Color of the inactive checkbox',
      control: {
        type: 'color'
      }
    },
    enablePrefixAction: {
      name: 'Enable Prefix Action',
      description: 'Whether to enable the prefix action',
      control: {
        type: 'boolean'
      }
    },
    enableCheckbox: {
      name: 'Enable Checkbox',
      description: 'Whether to enable the checkbox',
      control: {
        type: 'boolean'
      }
    },
    checkboxActiveIcon: {
      name: 'Checkbox Active Icon',
      description: 'Icon to display for the active checkbox',
      control: {
        type: 'text'
      }
    },
    checkboxInactiveIcon: {
      name: 'Checkbox Inactive Icon',
      description: 'Icon to display for the inactive checkbox',
      control: {
        type: 'text'
      }
    },
    highlightRow: {
      name: 'Highlight Row',
      description: 'Whether to highlight the row',
      control: {
        type: 'boolean'
      }
    }
  },
  args: {},
};

export default meta;
type Story = StoryObj<NativeGridComponent>;

/// Stories

export const Default: Story = {
  args: {
    data: mockNativeGridData,
    checkboxActive: '#cdfff9',
    checkboxInactive: '#D9D9D9',
    enablePrefixAction: true,
    enableCheckbox: true,
    size: 'large',
    prefixActionIcon: 'delete',
    checkboxActiveIcon: 'commit',
    checkboxInactiveIcon: 'circle',
  }
};

export const Small: Story = {
  args: {
    data: mockNativeGridData,
    checkboxActive: '#cdfff9',
    checkboxInactive: '#D9D9D9',
    enablePrefixAction: true,
    enableCheckbox: true,
    size: 'small',
    prefixActionIcon: 'delete',
    checkboxActiveIcon: 'commit',
    checkboxInactiveIcon: 'circle',
  }
};

export const HighlightRow: Story = {
  args: {
    data: mockNativeGridData,
    checkboxActive: '#cdfff9',
    checkboxInactive: '#D9D9D9',
    enablePrefixAction: true,
    enableCheckbox: true,
    size: 'large',
    prefixActionIcon: 'delete',
    checkboxActiveIcon: 'commit',
    checkboxInactiveIcon: 'circle',
    highlightRow: true,
  }
};
