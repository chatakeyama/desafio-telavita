import styled from "styled-components";

const StyledPagination = styled.nav.attrs({
    'aria-label': 'Navegação de páginas',
})`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;

    .buttons {
        display: flex;
        justify-content: center;
        padding: 2rem 0;
    }

    .btn-text { 
        @media(max-width: ${({ theme }) => theme.sm}){
            display: none;
        }
    }
`

export default StyledPagination