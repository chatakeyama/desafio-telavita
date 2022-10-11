import { ThemeProvider } from 'styled-components'
import { Card } from './components/Card';
import GlobalStyles from './components/styles/Global'
import Container from './components/styles/Container.styled';
import CardsArea from './components/styles/CardsArea.styled';
import { Header } from './components/Header';

function App() {

  const theme = {
    mobile: '576px',
    tablet: '768px'
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Header />
          <main>
            <CardsArea>
              {[1, 2, 3, 4].map(() =>
                <Card />
              )}
            </CardsArea>
          </main>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
