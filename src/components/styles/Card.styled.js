
import styled from 'styled-components'

const StyledCard = styled.article`
    width: 35rem;
    border: 1px black solid;
    padding: 1.8rem;
    margin: 2rem;

    @media(max-width: ${({ theme }) => theme.mobile}){
        margin: 2rem 0;
    }

    div {
        display: flex;
        justify-content: center;
    }

    h3 {
        text-align: center;
        margin-bottom: 2rem;
    }

    img {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 20rem;
        margin-bottom: 2rem;
    }
`

export default StyledCard