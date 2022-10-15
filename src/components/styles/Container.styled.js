import styled from 'styled-components'

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 4rem;

    @media(max-width: ${({ theme }) => theme.mobile}){
        padding-top: 2rem;
    }
`

export default Container