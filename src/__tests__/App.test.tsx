import React from 'react'
import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { server } from '../__mocks__/server'
import App from '../App'
import config from '../config.json'
import { Header } from '../components/Header'

const apiEndpoint = config.apiUrl

test('Handle errors while getting characters from server', async () => {
  render(<App />)
  // server.resetHandlers(
  //   rest.get(`${apiEndpoint}?page[limit]=4&page[offset]=0`, (req, res, ctx) =>
  //     res(ctx.status(404))
  //   )
  // )
  // const messageAlert = await screen.findByText(
  //   /Falha ao conectar no servidor. Tente novamente mais tarde./
  // )
  // expect(messageAlert).toBeInTheDocument()
}) 