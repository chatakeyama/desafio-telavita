
import { ReactNode } from "react"
import StyledButton from "./styles/Button.styled"

type ButtonProps = {
    children: ReactNode
    onClick: () => void
}

export function Button({ children, onClick }: ButtonProps) {

    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    )

}