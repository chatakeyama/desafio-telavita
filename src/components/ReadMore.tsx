import { useState } from "react"
import StyledReadMore from "./styles/ReadMore.styled"

type ReadMoreProps = {
    children: string
    limit: number
}

export function ReadMore({ children, limit }: ReadMoreProps) {
    const text = children
    const [isReadMore, setIsReadMore] = useState(true)
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore)
    }

    const isTextBiggerThan = (limit: number) => {
        return text.length > limit
    }

    return (
        <>
            <p>
                {(isReadMore && isTextBiggerThan(limit)) ? text.slice(0, limit) : text}
                <StyledReadMore>
                    <span onClick={toggleReadMore} >
                        {(isReadMore && isTextBiggerThan(limit)) ? "...Leia mais" : " "}
                        {(!isReadMore && isTextBiggerThan(limit)) ? "Mostrar Menos" : ""}
                    </span>
                </StyledReadMore>
            </p>
        </>
    )

}