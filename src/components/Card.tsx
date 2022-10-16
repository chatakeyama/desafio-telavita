import StyledCard from './styles/Card.styled'
import { useState } from 'react'
import { ReadMore } from './ReadMore'
import { IAttributes } from '../interfaces/IHttpResponse.interface'

type CardPropsType = {
    attributes: IAttributes
}

export function Card({ attributes }: CardPropsType) {

    const { name, image, otherNames, description } = attributes
    const [imageLoaded, setImageLoaded] = useState(false)

    const convertOtherNamesListToString = (otherNames: string[]): string => {
        return otherNames.map((otherName: string) => ` ${otherName.trim()}`).join()
    }

    return (
        <>
            <StyledCard>
                <h3>{name}</h3>
                <div className='imageContainer'>
                    <img onLoad={() => setImageLoaded(true)} src={image.original}
                        className={imageLoaded ? '' : 'skeleton'}
                        alt={`Poster of ${name}`}
                        width='193px' height='300px' />
                </div>
                <div className='other-names'>
                    Outros nomes:
                    {otherNames.length === 0 && (<p>Não tem</p>)}
                    <ReadMore limit={30}>{convertOtherNamesListToString(otherNames)}</ReadMore>
                </div>
                Descrição:
                {!description && (<p>Não tem</p>)}
                <ReadMore limit={110}>
                    {description}
                </ReadMore>
            </StyledCard>
        </>
    )

}