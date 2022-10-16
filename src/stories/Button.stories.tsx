import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button';

export default {
  title: 'AnimaVita/Button',
  component: Button,
  argTypes: {
    children: {
      name: 'children',
      type: { name: 'string', required: true },
      description: 'Conteúdo do botão.',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: {
        type: null,
      }
    },
    onClick: {
      description: 'Função a ser executada ao clicar no botão.',
    }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} >{args.children}</Button>;

export const Default = Template.bind({});
Default.args = {
  children: <><img src='../assets/left-chevron.png' alt='Seta para esquerda' width='16px' height='16px' /> Primeira</>
};
