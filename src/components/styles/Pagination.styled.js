import styled from "styled-components";

const StyledPagination = styled.nav.attrs({
    'aria-label': 'Navegação de páginas',
})`
    display: flex;
    justify-content: center;
    padding: 2rem;

    .btn-text { 
        @media(max-width: ${({ theme }) => theme.sm}){
            display: none;
        }    
    }
`

export default StyledPagination