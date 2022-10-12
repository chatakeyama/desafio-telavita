
import { ReactElement } from 'react'
import StyledCard from './styles/Card.styled'
import Collapsible from 'react-collapsible'
import { ReadMore } from './ReadMore'

type CardPropsType = {
    [x: string]: any
    item: any
}

export function Card({ item }: CardPropsType) {

    const OtherNames = ({ item }: any): ReactElement => {
        let text = ''
        const otherNamesStyle = { marginBottom: '1.5rem', fontSize: '14px' } as React.CSSProperties
        if (item.otherNames.length > 0) {
            const otherNames = item.otherNames.map((otherName: string) => otherName.trim()).join()
            text = otherNames
        } else {
            text = 'Não tem'
        }
        return <><p style={otherNamesStyle}>{text}</p></>
    }

    return (
        <>
            <StyledCard>
                <h3>{item.name}</h3>
                <div className='imageContainer'>
                    <img src={item.image.original} alt={`Image poster of ${item.name}`} />
                </div>
                Outros nomes: <p><OtherNames item={item} /></p>
                <ReadMore>
                    {item.description}
                </ReadMore>
            </StyledCard>

        </>
    )

}