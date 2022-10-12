import { useState } from "react"
import StyledReadMore from "./styles/ReadMore.styled"

type ReadMoreProps = {
    children: string
}

export function ReadMore({ children }: ReadMoreProps) {
    const text = children
    const [isReadMore, setIsReadMore] = useState(true)
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore)
    }

    return (
        <>
            <p>
                {isReadMore ? text.slice(0, 85) : text}
                <StyledReadMore>
                    <span onClick={toggleReadMore} >
                        {isReadMore ? "...Leia mais" : " Mostrar Menos"}
                    </span>
                </StyledReadMore>
            </p>
        </>
    )

}