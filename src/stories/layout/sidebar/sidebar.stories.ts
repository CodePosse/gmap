import {applicationConfig, Meta, StoryObj} from '@storybook/angular';
import {SidebarComponent} from "./sidebar.component";
import {provideAnimations} from "@angular/platform-browser/animations";
import {IMenuItem} from "./menu-item";
import {provideRouter} from "@angular/router";

const menuItems: IMenuItem[] = [
  {label: 'Create Entities', icon: 'add_circle_outline', type: 'link'},
  {label: 'Bulk Create', icon: 'add_circle_outline', type: 'link'},
  {label: 'Saved Dashboards', icon: 'space_dashboard', type: 'link'},
  {label: 'Advanced Search', icon: 'manage_search', type: 'link'},
  {label: 'Data Model', icon: 'database', type: 'link'},
  {label: 'Rules & Governance', icon: 'data_object', type: 'link'},
  {label: 'Permissions & Security', icon: 'encrypted', type: 'link'},
];

const meta: Meta<SidebarComponent> = {
  title: 'Layout/Sidebar',
  component: SidebarComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations(), provideRouter([])],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    collapsed: {
      name: 'Collapsed',
      description: 'Whether the sidebar is collapsed or not',
      control: {
        type: 'boolean',
      },
    },
    menu: {
      name: 'Menu',
      description: 'The menu items to display',
      control: {
        type: 'object',
      },
    },
    background: {
      name: 'Background',
      description: 'The background color of the sidebar',
      defaultValue: {summary: 'white'},
      control: {
        type: 'select',
        options: ['white', 'light-gray'],
      },
    }
  },
  args: {},
};

export default meta;
type Story = StoryObj<SidebarComponent>;

/// Stories

export const Open: Story = {
  args: {
    collapsed: false,
    menu: menuItems,
  },
};

export const Closed: Story = {
  args: {
    collapsed: true,
    menu: menuItems,
  },
};
