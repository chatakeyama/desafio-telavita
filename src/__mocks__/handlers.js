import { rest } from 'msw'
import config from '../config.json'

const apiEndpoint = config.apiUrl

export const handlers = [
  rest.get(`${apiEndpoint}?page[limit]=4&page[offset]=0`, (req, res, ctx) => {

    res(
      ctx.status(200),
      ctx.json({
        "data": [
          {
            "id": "5",
            "attributes": {
              "otherNames": [],
              "name": "Ein",
              "description": "Ein is a Pembroke Welsh Corgi brought aboard the Bebop by Spike after a failed attempt to capture a bounty. Ein is a \"data dog\": while the televised series only briefly hints on the fact that this means Ein's brain was somehow enhanced drastically, the manga shows Ed accessing data stored in Ein's brain via a virtual reality-type interface with which she has a conversation with a human proprietor. It is obvious that Ein is abnormally intelligent, as he is able to answer the telephone, drive a car (just the wheel), use the SSW, play shÅ�gi, and generally do a number of other things that an average canine should not be able to do, but he never talks in a human language during the show. He does, however, speak in Session 18 \"Speak Like A Child\" after the credits Ein tells Spike \"Next Episode: Wild Horses\". He is able to \"speak\" to other species, as demonstrated in Session 17, \"Mushroom Samba\" (he spoke to a cow with a subtitled bark of \"Thanks\", to which the cow has a subtitled moo back of \"No problem\"). It is likely that Ed is the only crew member with any idea of Ein's capabilities, as the other crew members are quick to dismiss Ein, and never seem to acknowledge him as more than a pet. Ein initially takes a shine to Jet, but when Ed joins the crew, he comes around to her as well. Frequently the two trade roles, with Ein expressing very human sentiments via facial expression and Ed regressing to a feral state. He went with Ed after she left the crew, probably because of his attachment to her. His name is a pun on the Japanese word for \"dog\" (çŠ¬ inu) but is also German for \"one\". \"Ein\" may also be short for \"Einstein\", after Albert Einstein, because of the extraordinary intelligence he possesses."
            }
          }
        ]
      })
    )
  }),

  rest.get(`${apiEndpoint}?page%5Blimit%5D=4&page%5Boffset%5D=4`, (req, res, ctx) => {

    res(
      ctx.status(200),
      ctx.json({
        "data": [
          {
            "id": "7",
            "attributes": {
              "otherNames": ["Ju"],
              "name": "Julia",
              "description": "Julia is a beautiful and mysterious woman from both Spike and Vicious' pasts."
            }
          }
        ]
      }),
    )
  }),
]