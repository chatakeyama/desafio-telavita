import { render, screen } from '@testing-library/react'
import { Card } from '../components/Card'

test('it must have an image and a title', async () => {
  const item = {
    "otherNames": [],
    "name": "Ein",
    "description": "Ein is a Pembroke Welsh Corgi brought aboard the Bebop by Spike after a failed attempt to capture a bounty.",
    "image": { "original": "" }
  }

  render(<Card item={item} />)

  const image = await screen.findByRole('img')
  expect(image).toBeInTheDocument()

  const title = await screen.findByRole('heading')
  expect(title).toBeInTheDocument()
})

test('show "Leia Mais" button when description text is bigger than 110 caracters', async () => {
  const item = {
    "otherNames": [],
    "name": "Ein",
    "description": "The self-invented personal name of an elite net-diver from Earth, hacker Radical Edward is a very strange, somewhat androgynous, teenage girl assumed to be around",
    "image": { "original": "" }
  }

  render(<Card item={item} />)
  const readMore = await screen.findByRole('button')
  expect(readMore).toHaveTextContent('...Leia mais')
})

export { }; 