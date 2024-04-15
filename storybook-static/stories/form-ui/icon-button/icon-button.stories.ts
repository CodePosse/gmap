import {applicationConfig, Meta, StoryObj} from '@storybook/angular';
import {provideAnimations} from "@angular/platform-browser/animations";
import {IconButtonComponent} from "./icon-button.component";
import {fn} from "@storybook/test";

const meta: Meta<IconButtonComponent> = {
  title: 'Form-UI/Icon Button',
  component: IconButtonComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    icon: {
      name: 'Icon',
      description: 'The icon to display. See https://fonts.google.com/icons for a list of available icons.',
      control: {
        type: 'text'
      }
    },
    type: {
      name: 'Type',
      description: 'The type of icon button to display.',
      control: {
        type: 'select',
        options: ['Plain', 'Menu']
      }
    },
    menu: {
      name: 'Menu',
      description: 'The menu items to display when the type is set to "Menu".',
      control: {
        type: 'object'
      },
      if: {arg: 'type', eq: 'Menu'}
    }
  },
  args: {
    click: fn()
  },
};

export default meta;
type Story = StoryObj<IconButtonComponent>;

/// Stories

export const Plain: Story = {
  args: {
    icon: 'library_add',
    type: 'Plain'
  }
};

export const Menu: Story = {
  args: {
    icon: 'more_vert',
    type: 'Menu',
    menu: [
      {
        label: 'Option 1',
        type: 'link',
      },
      {
        label: 'Option 2',
        type: 'link',
      },
      {
        label: 'Option 3',
        type: 'link',
      }
    ]
  }
};
