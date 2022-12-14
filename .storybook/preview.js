import { addDecorator } from "@storybook/react";
import GlobalStyles from '../src/components/styles/Global';

export const parameters = {

  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((story) => (
  <>
    <GlobalStyles />
    {story()}
  </>
));