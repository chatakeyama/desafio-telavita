import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReadMore } from '../components/ReadMore';

export default {
  title: 'AnimaVita/ReadMore',
  component: ReadMore,
  argTypes: {
    children: {
      name: 'children',
      type: { name: 'string', required: true },
      description: 'Texto que terá uma parte sua escondida quando ultrapassar o limite de caracteres estabelecido.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    limit: {
      description: 'Número de caracteres que será exibido inicialmente.',
    }
  },
} as ComponentMeta<typeof ReadMore>;

const Template: ComponentStory<typeof ReadMore> = (args) => <ReadMore {...args} >{args.children}</ReadMore>;

export const Default = Template.bind({});
Default.args = {
  children:  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in dolor posuere 
  ipsum auctor hendrerit.`,
  limit: 20
};
