import { render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { server } from '../__mocks__/server'
import App from '../App'
import config from '../config.json'

const apiEndpoint = config.apiUrl

test('renders the title', () => {
   render(<App />);
   const title = screen.getByRole('heading', { level: 1 });
   expect(title).toHaveTextContent('AnimaVita');
});

test('show message error when getting error from server', async () => {
   render(<App />)
   server.resetHandlers(
      rest.get(`${apiEndpoint}`, (req, res, ctx) =>
         res(ctx.status(404))
      )
   )
   await waitFor(() => screen.getByRole('alert'))
   expect(screen.getByRole('alert')).
      toHaveTextContent('Falha ao conectar no servidor. Tente novamente mais tarde.')
})

test('show 4 cards when access the aplication (not using mock server)', async () => {
   server.close()
   render(<App />)
   await waitFor(() => screen.getAllByRole('article'))
   const cards = await screen.findAllByRole('article')
   expect(cards).toHaveLength(4)
}) 