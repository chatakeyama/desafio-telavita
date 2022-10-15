
import styled from 'styled-components'

const StyledCard = styled.article`
    width: 29rem;
    border: 1px black solid;
    padding: 1.8rem;
    margin: 2rem;
    align-self: flex-start;
    min-height: 41rem;
    
    @media(max-width: ${({ theme }) => theme.lg}){
        width: 24rem;
        margin: 1.9rem;
    }
    @media(max-width: ${({ theme }) => theme.md}){
        width: 100%;
        margin: 2rem 0;
    }
    @media(max-width: ${({ theme }) => theme.sm}){
        width: 100%;
    }
    @media(max-width: ${({ theme }) => theme.xs}){
        width: 100%;
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
        object-fit: cover;
    }
`

export default StyledCard