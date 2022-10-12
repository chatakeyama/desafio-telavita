import styled from "styled-components";

const StyledPagination = styled.div`
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