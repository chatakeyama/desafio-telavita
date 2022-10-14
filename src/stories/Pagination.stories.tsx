import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button';
import { BsChevronBarLeft } from "react-icons/bs";
import { Pagination } from '../components/Pagination';

export default {
  title: 'AnimaVita/Pagination',
  component: Pagination,
  argTypes: {
    paginationLinks: {
      description: 'Contém URL para cada botão da paginação (primeira, anterior, próxima e última)',
    },
    onPageChange: {
      description: 'Função que recebe a URL como argumento e será executada ao clicar no botão.'
    }
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  paginationLinks: {
    "first": "https://kitsu.io/api...",
    "prev": "https://kitsu.io/api...",
    "next": "https://kitsu.io/api...",
    "last": "https://kitsu.io/api..."
  }
};
