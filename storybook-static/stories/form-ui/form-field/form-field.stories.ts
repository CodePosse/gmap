import {applicationConfig, Meta, StoryObj} from '@storybook/angular';
import {provideAnimations} from "@angular/platform-browser/animations";
import {FormFieldComponent} from "./form-field.component";

const meta: Meta<FormFieldComponent> = {
  title: 'Form UI/Form Field',
  component: FormFieldComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    // Common
    id: {
      name: 'Id',
      description: 'The id of the form field',
      defaultValue: {summary: 'form-field-1'},
      control: {
        type: 'text'
      }
    },
    type: {
      name: 'Type',
      description: 'The type of the input field',
      defaultValue: {summary: 'text'},
      control: {
        type: 'select',
        options: {
          text: 'text',
          password: 'password',
          email: 'email',
          number: 'number',
          tel: 'tel',
          url: 'url',
          textarea: 'textarea',
          select: 'select',
          datepicker: 'datepicker',
          mask: 'mask',
          'year-picker': 'year-picker'
        }
      }
    },
    placeholder: {
      name: 'Placeholder',
      description: 'The placeholder of the input field',
      defaultValue: {summary: 'Placeholder'},
      control: {
        type: 'text'
      }
    },
    size: {
      name: 'Size',
      description: 'The size of the input field',
      defaultValue: {summary: 'normal'},
      control: {
        type: 'select',
        options: {
          normal: 'normal',
          large: 'large'
        }
      }
    },
    value: {
      name: 'Value',
      description: 'The value of the input field',
      defaultValue: {summary: null},
      control: {
        type: 'text'
      }
    },
    showInheritButton: {
      name: 'Show Inherit Button',
      description: 'Whether to show the inherit button',
      defaultValue: {summary: false},
      control: {
        type: 'boolean'
      }
    },
    showIncrementDecrementButtons: {
      name: 'Show Increment Decrement Buttons',
      description: 'Whether to show the increment and decrement buttons',
      defaultValue: {summary: false},
      control: {
        type: 'boolean'
      },
      if: {arg: 'type', eq: 'number'}
    },
    inheritButtonBackground: {
      name: 'Inherit Button Background',
      description: 'The background color of the inherit button',
      defaultValue: {summary: '#f1f1f1'},
      control: {
        type: 'color'
      },
      if: {arg: 'showInheritButton', eq: true}
    },
    inputBackground: {
      name: 'Input Background',
      description: 'The background color of the input field',
      defaultValue: {summary: '#ffffff'},
      control: {
        type: 'color'
      }
    },
    width: {
      name: 'Width',
      description: 'The width (e.g. 60px) of the input field',
      control: {
        type: 'text'
      }
    },

    // Label

    label: {
      name: 'Label',
      description: 'The label of the input field. If not provided, the label will not be displayed.',
      defaultValue: {summary: 'Label'},
      control: {
        type: 'text'
      }
    },
    labelColor: {
      name: 'Label Color',
      defaultValue: {summary: '#323232'},
      control: {
        type: 'color'
      }
    },
    labelTextTransform: {
      name: 'Label Text Transform',
      defaultValue: {summary: 'uppercase'},
      control: {
        type: 'select',
        options: {
          none: 'none',
          capitalize: 'capitalize',
          uppercase: 'uppercase',
          lowercase: 'lowercase'
        }
      }
    },

    // Input Select

    options: {
      name: 'Options',
      description: 'The options for the select input field.',
      defaultValue: {summary: '[]'},
      control: {
        type: 'object'
      },
      if: {arg: 'type', eq: 'select'}
    },

    darkMode: {
      name: 'Dark Mode',
      description: 'Whether to use dark mode',
      defaultValue: {summary: false},
      control: {
        type: 'boolean'
      },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
      if: {arg: 'type', eq: 'select'}
    },

    // Input Mask
    mask: {
      name: 'Mask',
      description: 'The mask for the input field (e.g. [/\d/, /\d/, \':\', /\d/, /\d/, \':\', /\d/, /\d/] for HH:MM:SS)',
      control: {
        type: 'object'
      },
      if: {arg: 'type', eq: 'mask'}
    }
  },
  args: {},
};

export default meta;
type Story = StoryObj<FormFieldComponent>;

/// Stories

export const Default: Story = {
  args: {
    id: 'form-field-1',
    type: 'text',
    placeholder: 'Enter series name',
    label: 'Series Name',
    labelTextTransform: 'uppercase',
    labelColor: '#323232',
    inheritButtonBackground: '#cdfff9',
    size: 'normal',
    showInheritButton: true
  }
};

export const Select: Story = {
  args: {
    id: 'form-field-2',
    type: 'select',
    placeholder: 'Select a language',
    label: 'Primary Language',
    labelTextTransform: 'uppercase',
    labelColor: '#323232',
    size: 'normal',
    options: [
      {value: 'en', label: 'English'},
      {value: 'es', label: 'Spanish'},
      {value: 'fr', label: 'French'},
      {value: 'de', label: 'German'},
    ]
  }
};

export const SelectDark: Story = {
  args: {
    id: 'form-field-2',
    type: 'select',
    placeholder: 'Select a type',
    label: 'Type',
    labelTextTransform: 'uppercase',
    labelColor: '#323232',
    darkMode: true,
    size: 'normal',
    options: [
      {value: 'tv', label: 'TV Series'},
      {value: 'movie', label: 'Movie'},
    ]
  }
};

export const SelectWithIcon: Story = {
  args: {
    id: 'form-field-3',
    type: 'select',
    label: 'Locked Status',
    labelTextTransform: 'uppercase',
    labelColor: '#323232',
    size: 'normal',
    value: '0',
    options: [
      {value: '1', label: 'Locked', prefixIcon: 'lock'},
      {value: '0', label: 'Unlocked', prefixIcon: 'lock_open'},
    ]
  }
};

export const Datepicker: Story = {
  args: {
    id: 'form-field-3',
    type: 'datepicker',
    placeholder: '',
    label: 'First commit date',
    labelTextTransform: 'uppercase',
    labelColor: '#323232',
    size: 'normal'
  }
};

export const YearPicker: Story = {
  args: {
    id: 'form-field-5',
    type: 'year-picker',
    placeholder: 'YYYY',
    label: 'Release Year',
    labelTextTransform: 'uppercase',
    labelColor: '#323232',
    size: 'normal'
  }
};

export const Mask: Story = {
  args: {
    id: 'form-field-4',
    type: 'mask',
    mask: [/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/],
    placeholder: 'HH:MM:SS',
    label: 'Broadcast Run Length',
    labelTextTransform: 'uppercase',
    labelColor: '#323232',
    size: 'normal'
  }
};
