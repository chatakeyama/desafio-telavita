import { Card } from "./Card";
import StyledCardList from "./styles/CardList.styled";

export function CardList({characters}: any) {
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