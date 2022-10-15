import styled from 'styled-components'

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width: ${({ theme }) => theme.md}){
        width: 70%;
    }
    @media(max-width: ${({ theme }) => theme.sm}){
        width: 80%;
    }
    @media(max-width: ${({ theme }) => theme.xs}){
        width: 90%;
    }
    `

export default Container