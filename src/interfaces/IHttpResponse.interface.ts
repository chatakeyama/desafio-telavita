
export interface IImage {
  original: string
}

export interface IAttributes {
  description: string
  image: IImage
  name: string
  otherNames: string[]
}

export interface ICharacter {
  id: string
  attributes: IAttributes;
}

export interface ILinks {
  first: string
  prev?: string
  next?: string
  last: string
}

export interface IMeta {
  count: number
}

export interface IHttpResponse {
  data: ICharacter[]
  links: ILinks;
  meta: IMeta;
}