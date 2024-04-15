import {applicationConfig, Meta, StoryObj} from '@storybook/angular';
import {provideAnimations} from "@angular/platform-browser/animations";
import {CheckboxComponent} from "./checkbox.component";
import {fn} from "@storybook/test";

const meta: Meta<CheckboxComponent> = {
  title: 'Form UI/Checkbox',
  component: CheckboxComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    checked: {
      name: 'Checked',
      control: {
        type: 'boolean',
      },
      description: 'Whether the checkbox is checked',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    indeterminate: {
      name: 'Indeterminate',
      control: {
        type: 'boolean',
      },
      description: 'Whether the checkbox is in indeterminate state',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    labelPosition: {
      name: 'Label Position',
      control: {
        type: 'radio',
        options: ['before', 'after'],
      },
      description: 'Whether the label should appear after or before the checkbox',
      table: {
        type: {
          summary: 'before | after',
        },
        defaultValue: {
          summary: 'after',
        },
      },
    },
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
      description: 'Whether the checkbox is disabled',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    label: {
      name: 'Label',
      control: {
        type: 'text',
      },
      description: 'The label to display next to the checkbox',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Checkbox',
        },
      },
    },
  },
  args: {
    change: fn()
  },
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

/// Stories

export const Default: Story = {
  args: {
    checked: false,
    indeterminate: false,
    labelPosition: 'after',
    disabled: false,
    label: 'Checkbox',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    indeterminate: false,
    labelPosition: 'after',
    disabled: false,
    label: 'Checkbox',
  },
};

export const Indeterminate: Story = {
  args: {
    checked: false,
    indeterminate: true,
    labelPosition: 'after',
    disabled: false,
    label: 'Checkbox',
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    indeterminate: false,
    labelPosition: 'after',
    disabled: true,
    label: 'Checkbox',
  },
};

export const BeforeLabel: Story = {
  args: {
    checked: false,
    indeterminate: false,
    labelPosition: 'before',
    disabled: false,
    label: 'Checkbox',
  },
};
