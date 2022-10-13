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
  const [serverError, setServerError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setPaginationLinks(undefined)
    getCharactersFromServer(currentPaginationLink).then(
      response => {
        setLoading(false)
        setServerError(false)
        setCharacters(response.data)
        setPaginationLinks(response.links)
      }
    ).catch(error => {
      setLoading(false)
      setServerError(true)
    })
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
            {serverError && (<p>Falha ao conectar no servidor. Tente novamente mais tarde.</p>)}
            <CardList characters={characters} loading={loading} />
            <Pagination paginationLinks={paginationLinks} onPageChange={handlePageChange} />
          </main>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
