import StyledCard from './styles/Card.styled'
import { ReadMore } from './ReadMore'

type CardPropsType = {
    [x: string]: any
    item: any
}

export function Card({ item }: CardPropsType) {

    const otherNames = (item: any): string => {
        return item.otherNames.map((otherName: string) => ` ${otherName.trim()}`).join()
    }

    return (
        <>
            <StyledCard>
                <h3>{item.name}</h3>
                <div className='imageContainer'>
                    <img src={item.image.original} alt={`Poster of ${item.name}`} />
                </div>
                <div className='other-names'>
                    Outros nomes:
                    {item.otherNames.length === 0 && (<p>Não tem</p>)}
                    <ReadMore limit={30}>{otherNames(item)}</ReadMore>
                </div>
                Descrição:
                {!item.description && (<p>Não tem</p>)}
                <ReadMore limit={110}>
                    {item.description}
                </ReadMore>
            </StyledCard>
        </>
    )

}