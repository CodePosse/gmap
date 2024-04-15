import {applicationConfig, Meta, StoryObj} from '@storybook/angular';
import {provideAnimations} from "@angular/platform-browser/animations";
import {CreateEntitiesComponent} from "./create-entities.component";

const meta: Meta<CreateEntitiesComponent> = {
  title: 'Examples/Create Entities',
  component: CreateEntitiesComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<CreateEntitiesComponent>;

/// Stories

export const Default: Story = {
  args: {}
};
