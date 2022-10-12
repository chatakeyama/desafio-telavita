import { ThemeProvider } from 'styled-components'
import { Card } from './components/Card';
import GlobalStyles from './components/styles/Global'
import Container from './components/styles/Container.styled';
import CardsArea from './components/styles/CardsArea.styled';
import { Header } from './components/Header';
import getAllCharacters from './services/HttpService'
import { useEffect, useState } from 'react';

function App() {

  const theme = {
    sm: '576px',
    md: '1209px'
  }

  const [data, setData] = useState<any>(null)

  useEffect(() => {
    getAllCharacters().then(
      data => {
        setData(data.data)
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
            <CardsArea>
              { data?.map((item: any) =>
                <Card key={item.id} item={item.attributes}  />
              )} 
            </CardsArea>
          </main>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
