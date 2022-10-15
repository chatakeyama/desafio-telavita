import { ICharacter } from "../interfaces/IHttpResponse.interface";
import { Card } from "./Card";
import StyledCardList from "./styles/CardList.styled";

type CardListProps = {
    characters?: ICharacter[]
    loading: boolean
}

export function CardList({ characters, loading }: CardListProps) {

    if (loading) {
        return <p>loading...</p>
    }

    return (
        <>
            <StyledCardList>
                {characters?.map(({ id, attributes }: ICharacter) =>
                    <Card key={id} attributes={attributes} />
                )}
            </StyledCardList>
        </>
    )
}