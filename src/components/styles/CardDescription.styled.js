import styled from "styled-components";

const StyledCardDescription = styled.div`

@media(min-width: ${({ theme }) => theme.md}){
    overflow: auto;
    height: 8rem;
}

@media(width < ${({ theme }) => theme.md}){
    display: none;
    overflow: hidden;
}  
`
export default StyledCardDescription