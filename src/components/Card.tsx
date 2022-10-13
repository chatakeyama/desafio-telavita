
import { ReactElement } from 'react'
import StyledCard from './styles/Card.styled'
import Collapsible from 'react-collapsible'
import { ReadMore } from './ReadMore'

type CardPropsType = {
    [x: string]: any
    item: any
}

export function Card({ item }: CardPropsType) {

    const otherNames = (item: any): string => {
        if (item.otherNames.length > 0) {
            return item.otherNames.map((otherName: string) => ` ${otherName.trim()}`).join()
        }
        return 'Não tem'
    }

    return (
        <>
            <StyledCard>
                <h3>{item.name}</h3>
                <div className='imageContainer'>
                    <img src={item.image.original} alt={`Image poster of ${item.name}`} />
                </div>
                <div className='other-names'>
                    Outros nomes:
                    <ReadMore limit={30}>{otherNames(item)}</ReadMore>
                </div>
                Descrição:
                <ReadMore limit={110}>
                    {item.description}
                </ReadMore>
            </StyledCard>
        </>
    )

}