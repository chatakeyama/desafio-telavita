import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardList } from '../components/CardList';

export default {
  title: 'AnimaVita/CardList',
  component: CardList,
  argTypes: {
    loading: {
      description: 'Controla se deve ou não mostrar o indicativo de carregamento do componente.'
    },
    characters: {
      description: 'Array de personagens.'
    }
  },
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args) => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  characters:
    [
      {
        "id": "1",
        "attributes":
        {
          "otherNames": ["Running Rock", "Black Dog"],
          "name": "Jet Black",
          "description": `Jet, known on his home satellite as the "Black Dog" for his tenacity, 
            is a 36-year-old former cop from Ganymede (a Jovian satellite) and acts as Spike's foil during the series.`,
          "image": { "original": "https://media.kitsu.io/characters/images/1/original.jpg" }
        }
      },
      {
        "id": "2",
        "attributes":
        {
          "otherNames": [],
          "name": "Spike Spiegel",
          "description": `JHeight: 185 cm (6' 1\") Weight: 70 kg (155 lbs) Blood type: O Date of Birth: 
          June 26, 2044 Planet of Origin: Mars  Spike Spiegel is a tall and lean 27-year-old bounty hunter born on Mars.`,
          "image": { "original": "https://media.kitsu.io/characters/images/2/original.jpg" }
        }
      }
    ]
};
