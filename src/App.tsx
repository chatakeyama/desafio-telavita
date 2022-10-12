import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'
import Container from './components/styles/Container.styled';
import { Header } from './components/Header';
import getCharactersFromServer from './services/HttpService'
import { useEffect, useState } from 'react';
import { CardList } from './components/CardList';
import { IPagination, Pagination } from './components/Pagination';

function App() {

  const theme = {
    sm: '576px',
    md: '1209px'
  }

  const [characters, setCharacters] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [currentPaginationLink, setCurrentPaginationLink] = useState<string>()
  const [paginationLinks, setPaginationLinks] = useState<IPagination>()

  useEffect(() => {
    setLoading(true)
    setPaginationLinks(undefined)
    getCharactersFromServer(currentPaginationLink).then(
      response => {
        setLoading(false)
        setCharacters(response.data)
        setPaginationLinks(response.links)
      }
    )

  }, [currentPaginationLink])

  const handlePageChange = (link: string) => {
    setCurrentPaginationLink(link)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Header />
          <main>
            <CardList characters={characters} loading={loading} />
            <Pagination paginationLinks={paginationLinks} onPageChange={handlePageChange} />
          </main>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
