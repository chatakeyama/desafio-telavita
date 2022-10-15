import styled from 'styled-components'

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 4rem;

    @media(max-width: ${({ theme }) => theme.sm}){
        padding: 2rem 0;
    }
`

export default Container