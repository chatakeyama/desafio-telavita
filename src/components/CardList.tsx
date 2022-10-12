import { Card } from "./Card";
import StyledCardList from "./styles/CardList.styled";

type CardListProps = {
    characters: any
    loading: boolean
}

export function CardList({ characters, loading }: CardListProps) {

    if (loading) {
        return <p>loading...</p>
    }

    return (
        <>
            <StyledCardList>
                {characters?.map((character: any) =>
                    <Card key={character.id} item={character.attributes} />
                )}
            </StyledCardList>
        </>
    )
}