import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button';
import { BsChevronBarLeft } from "react-icons/bs";

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
  children: <><BsChevronBarLeft /> Primeira</>
};
