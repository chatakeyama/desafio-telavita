import styled from "styled-components";

const StyledButton = styled.button`
    margin: 0 0.5rem;
    padding: 1rem;
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;

    &:hover{
        background-color: #f2f2f2;
        cursor: pointer;
    }
    img { 
        position: relative;
        top: 0.2rem;
    }
`

export default StyledButton