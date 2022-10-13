
import styled from 'styled-components'

const StyledCard = styled.article`
    width: 25rem;
    border: 1px black solid;
    padding: 1.8rem;
    margin: 2rem;
    align-self: flex-start;
    min-height: 39rem;
    
    @media(max-width: ${({ theme }) => theme.sm}){
        margin: 2rem 0;
    }

    .Collapsible__trigger {
        padding:  1rem 0;
        display: block;
        position: relative;
    }

    .other-names {
        margin-bottom: 1.2rem;
    }
    
    .imageContainer {
        display: flex;
        justify-content: center;
        height: 20rem;
    }

    h3 {
        text-align: center;
        margin-bottom: 2rem;
    }

    img {
        display: flex;
        justify-content: center;
        max-width: 100%;
        margin-bottom: 1.2rem;
    }
`

export default StyledCard