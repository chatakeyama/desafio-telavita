
import styled from 'styled-components'

const StyledCard = styled.article`
    width: 30rem;
    border: 1px black solid;
    padding: 1.8rem;
    margin: 2rem;
    
    @media(max-width: ${({ theme }) => theme.sm}){
        margin: 2rem 0;
    }

    @media(width >= ${({ theme }) => theme.md}){
        .Collapsible{
            display: none;
        }
    }

    .Collapsible__trigger {
        padding:  1rem 0;
        display: block;
        position: relative;
    }
    
    .imageContainer {
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
        max-width: 15rem;
        margin-bottom: 2rem;
    }
`

export default StyledCard