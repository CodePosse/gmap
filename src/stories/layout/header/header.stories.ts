import {applicationConfig, Meta, StoryObj} from '@storybook/angular';
import {HeaderComponent} from "./header.component";
import {provideAnimations} from "@angular/platform-browser/animations";
import {fn} from "@storybook/test";

const meta: Meta<HeaderComponent> = {
  title: 'Layout/Header',
  component: HeaderComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    type: {
      name: 'Type',
      description: 'The type of header to display',
      defaultValue: {summary: 'blank'},
      control: {
        type: 'select',
        options: {
          Search: 'search',
          Actions: 'actions',
          Blank: 'blank'
        }
      }
    },
    profileButtonColor: {
      defaultValue: {
        summary: '#ffbb4d',
      },
      name: 'Profile Button Color',
      description: 'The color of the profile button',
      control: {
        type: 'color'
      }
    },
    notifyCount: {
      name: 'Notifications Count',
      description: 'The number of notifications to display',
      defaultValue: {summary: 0},
      control: {type: 'range', min: 0, max: 99, step: 1}
    },
    notifyBadgeOverlap: {
      name: 'Notification Badge Overlap',
      description: 'Whether the notification badge should overlap the profile button',
      defaultValue: {summary: true},
      control: {
        type: 'boolean'
      }
    },
    logoWidth: {
      name: 'Logo Width (px)',
      description: 'The width of the logo',
      defaultValue: {summary: 150},
      control: {type: 'range', min: 10, max: 200, step: 1}
    },
    logoMargin: {
      name: 'Logo Margin (px)',
      description: 'The left margin for the logo',
      defaultValue: {summary: 30},
      control: {type: 'range', min: 0, max: 20, step: 1}
    },

    // Search
    searchInputPlaceholder: {
      name: 'Search Input Placeholder',
      description: 'The placeholder text for the search input',
      defaultValue: {summary: 'Search by keywords, titles, etc. Then press Enter'},
      control: {type: 'text'},
      if: {arg: 'type', eq: 'search'}
    },
    searchOptions: {
      name: 'Search Options',
      description: 'The options to display in the search dropdown',
      defaultValue: {summary: 'all'},
      control: {type: 'object'},
      if: {arg: 'type', eq: 'search'}
    },

    // Actions
    title: {
      name: 'Title',
      description: 'The title to display in the header',
      defaultValue: {summary: 'Title'},
      control: {type: 'text'},
      if: {arg: 'type', eq: 'actions'}
    },
    cancelText: {
      name: 'Cancel Text',
      description: 'The text to display on the cancel button',
      defaultValue: {summary: 'Cancel'},
      control: {type: 'text'},
      if: {arg: 'type', eq: 'actions'}
    },
    saveText: {
      name: 'Save Text',
      description: 'The text to display on the save button',
      defaultValue: {summary: 'Save'},
      control: {type: 'text'},
      if: {arg: 'type', eq: 'actions'}
    }
  },
  args: {
    save: fn(),
    cancel: fn()
  },
};

export default meta;
type Story = StoryObj<HeaderComponent>;

/// Stories

export const Search: Story = {
  args: {
    notifyCount: 4,
    profileButtonColor: '#ffbb4d',
    notifyBadgeOverlap: true,
    logoWidth: 150,
    logoMargin: 30,
    type: 'search',
    searchOptions: [
      {value: 'all', label: 'All'},
      {value: 'title', label: 'Title'},
      {value: 'author', label: 'Author'},
      {value: 'publisher', label: 'Publisher'},
      {value: 'isbn', label: 'ISBN'},
    ],
    searchInputPlaceholder: "Search by keywords, titles, etc. Then press Enter"
  }
};

export const Actions: Story = {
  args: {
    notifyCount: 4,
    profileButtonColor: '#ffbb4d',
    notifyBadgeOverlap: true,
    logoWidth: 150,
    logoMargin: 30,
    type: 'actions',
    title: 'Create Entries',
    cancelText: 'Cancel',
    saveText: 'Save all Entries'
  }
};

export const Blank: Story = {
  args: {
    notifyCount: 4,
    profileButtonColor: '#ffbb4d',
    notifyBadgeOverlap: true,
    logoWidth: 150,
    logoMargin: 30,
    type: 'blank'
  }
};
