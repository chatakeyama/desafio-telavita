import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'
import Container from './components/styles/Container.styled';
import { Header } from './components/Header';
import { CardList } from './components/CardList';
import { IPagination, Pagination } from './components/Pagination';
import getDataFromServer from './services/HttpService'
import { ICharacter } from './interfaces/IHttpResponse.interface';

function App() {

  const theme = {
    sm: '576px',
    md: '1209px'
  }

  const [characters, setCharacters] = useState<ICharacter[]>()
  const [loading, setLoading] = useState<boolean>(true)
  const [currentPaginationLink, setCurrentPaginationLink] = useState<string>()
  const [paginationLinks, setPaginationLinks] = useState<IPagination>()
  const [serverError, setServerError] = useState(false)
  const [totalCharacters, setTotalCharacters] = useState(0)

  const itemsPerPage = 4

  useEffect(() => {
    setLoading(true)
    setPaginationLinks(undefined)
    getDataFromServer(currentPaginationLink, itemsPerPage).then(
      response => {
        setLoading(false)
        setServerError(false)
        setCharacters(response.data)
        setPaginationLinks(response.links)
        setTotalCharacters(response.meta.count)
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
            {serverError && (<p role='alert'>Falha ao conectar no servidor. Tente novamente mais tarde.</p>)}
            <CardList characters={characters} loading={loading} />
            <Pagination paginationLinks={paginationLinks} onPageChange={handlePageChange} totalItems={totalCharacters} itemsPerPage={itemsPerPage} />
          </main>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
