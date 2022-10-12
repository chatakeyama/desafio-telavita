
import { ReactElement } from "react"
import StyledCard from "./styles/Card.styled"

type CardPropsType = {
    [x: string]: any
    item: any
}

export function Card({ item }: CardPropsType) {

    const OtherNames = ({ item }: any): ReactElement => {
        if (item.otherNames.length > 0) {
            const otherNames = item.otherNames.map((otherName: string) => otherName.trim()).join()
            const otherNamesStyle = { marginBottom: '1.5rem', textAlign: 'center' } as React.CSSProperties
            return <p style={otherNamesStyle}><strong>({otherNames})</strong></p>
        }
        return <></>
    }

    return (
        <>
            <StyledCard>
                <h3>{item.name}</h3>
                <div>
                    <img src={item.image.original} alt={`Image poster of ${item.name}`} />
                </div>
                <OtherNames item={item} />
                <p>{item.description}</p>
            </StyledCard>
        </>
    )

}