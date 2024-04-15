import {applicationConfig, Meta, StoryObj} from '@storybook/angular';
import {provideAnimations} from "@angular/platform-browser/animations";
import {AccordionComponent} from "./accordion.component";

const meta: Meta<AccordionComponent> = {
  title: 'Data Display/Accordion',
  component: AccordionComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    id: {
      name: 'Id',
      description: 'Unique identifier for the accordion',
      control: {
        type: 'text'
      }
    },
    title: {
      name: 'Title',
      description: 'Title of the accordion',
      control: {
        type: 'text'
      }
    },
    theme: {
      name: 'Theme',
      description: 'Theme of the accordion',
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      }
    },
    expanded: {
      name: 'Expanded',
      description: 'Whether the accordion is expanded by default',
      control: {
        type: 'boolean'
      }
    },
    showIncrementer: {
      name: 'Show Incrementer',
      description: 'Whether to show the incrementer',
      control: {
        type: 'boolean'
      }
    },
    incrementerWidth: {
      name: 'Incrementer Width',
      description: 'Width of the incrementer input',
      control: {
        type: 'text'
      }
    },

    // Tag
    tagLabel: {
      name: 'Tag Label',
      description: 'Label for the tag',
      control: {
        type: 'text'
      }
    },
    tagValue: {
      name: 'Tag Value',
      description: 'Value for the tag',
      control: {
        type: 'text'
      }
    },
    tagIcon: {
      name: 'Tag Icon',
      description: 'Icon for the tag',
      control: {
        type: 'text'
      }
    }
  },
  args: {},
};

export default meta;
type Story = StoryObj<AccordionComponent>;

/// Stories

export const Default: Story = {
  args: {
    id: 'accordion-1',
    title: 'Details',
    expanded: false,
    showIncrementer: false
  },
  render: (args: any) => ({
    template: `
        <gmap-accordion
            title="${args.title}"
            [expanded]="${args.expanded}"
            [showIncrementer]="${args.showIncrementer}"
        >Accordion content</gmap-accordion>
    `
  })
};

export const Expanded: Story = {
  args: {
    id: 'accordion-2',
    title: 'Details',
    expanded: true,
    showIncrementer: false
  },
  render: (args: any) => ({
    template: `
        <gmap-accordion
            title="${args.title}"
            [expanded]="${args.expanded}"
            [showIncrementer]="${args.showIncrementer}"
        >Accordion content</gmap-accordion>
    `
  })
};

export const WithIncrementer: Story = {
  args: {
    id: 'accordion-3',
    title: 'Details',
    contentMarginLeft: 94,
    expanded: false,
    showIncrementer: true
  },
  render: (args: any) => ({
    template: `
        <gmap-accordion
            title="${args.title}"
            [expanded]="${args.expanded}"
            [contentMarginLeft]="${args.contentMarginLeft}"
            [showIncrementer]="${args.showIncrementer}"
        >Accordion content</gmap-accordion>
    `
  })
};

export const SecondaryTheme: Story = {
  args: {
    id: 'accordion-4',
    title: 'Episodes',
    contentMarginLeft: 94,
    expanded: false,
    showIncrementer: true,
    theme: 'secondary',
    tagLabel: 'Season',
    tagValue: '01',
    tagIcon: 'arrow_upward'
  },
  render: (args: any) => ({
    template: `
        <gmap-accordion
            title="${args.title}"
            [expanded]="${args.expanded}"
            [contentMarginLeft]="${args.contentMarginLeft}"
            [showIncrementer]="${args.showIncrementer}"
            theme="${args.theme}"
            tagLabel="${args.tagLabel}"
            tagValue="${args.tagValue}"
            tagIcon="${args.tagIcon}"
        >Accordion content</gmap-accordion>
    `
  })
};
