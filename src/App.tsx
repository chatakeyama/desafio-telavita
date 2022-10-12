import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'
import Container from './components/styles/Container.styled';
import { Header } from './components/Header';
import getAllCharacters from './services/HttpService'
import { useEffect, useState } from 'react';
import { CardList } from './components/CardList';

function App() {

  const theme = {
    sm: '576px',
    md: '1209px'
  }

  const [characters, setCharacters] = useState<any>(null)

  useEffect(() => {
    getAllCharacters().then(
      data => {
        setCharacters(data.data)
      }
    )

  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Header />
          <main>
            <CardList characters={characters}/>
          </main>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
