import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '../components/Card';

export default {
  title: 'AnimaVita/Card',
  component: Card,
  argTypes: {
    item: {
      description: 'Objeto com as propriedades otherNames, name, description e image.'
    }
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  attributes: {
    "otherNames": ["Running Rock", "Black Dog"],
    "name": "Jet Black",
    "description": `Jet, known on his home satellite as the "Black Dog" for his tenacity, 
      is a 36-year-old former cop from Ganymede (a Jovian satellite) and acts as Spike's foil during the series.`,
    "image": { "original": "https://media.kitsu.io/characters/images/1/original.jpg" }
  }
};
