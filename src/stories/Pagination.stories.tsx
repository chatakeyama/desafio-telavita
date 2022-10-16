import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '../components/Pagination';

export default {
  title: 'AnimaVita/Pagination',
  component: Pagination,
  argTypes: {
    paginationLinks: {
      description: 'Contém URL para cada botão da paginação (primeira, anterior, próxima e última).',
    },
    onPageChange: {
      description: 'Função que recebe a URL como argumento e será executada ao clicar no botão.'
    },
    totalItems: {
      description: 'Número total de itens.'
    },
    itemsPerPage: {
      description: 'Número de itens por página.'
    }
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  itemsPerPage:2,
  totalItems: 4,
  paginationLinks: {
    "first": "https://kitsu.io/api...",
    "prev": "https://kitsu.io/api...",
    "next": "https://kitsu.io/api...",
    "last": "https://kitsu.io/api..."
  }
};
