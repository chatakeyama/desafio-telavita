import { Button } from "./Button"
import StyledPagination from "./styles/Pagination.styled"
import { BsChevronBarLeft, BsChevronLeft, BsChevronRight, BsChevronBarRight } from "react-icons/bs";

export interface IPagination {
    first: string,
    prev?: string,
    next?: string,
    last: string
}

type PaginationProps = {
    paginationLinks?: IPagination
    onPageChange: (link: string) => void
}

export function Pagination({ paginationLinks, onPageChange }: PaginationProps) {

    const buttonProperties = {
        'first': <><BsChevronBarLeft />{' Primeiro'}</>,
        'prev': <><BsChevronLeft />{' Anterior'}</>,
        'next': <>{'Próximo '}<BsChevronRight /></>,
        'last': <>{'Último '}<BsChevronBarRight /></>
    }

    return (
        <>
            <StyledPagination>
                {
                    paginationLinks &&
                    Object.entries(paginationLinks).map(([linkType, link]) => {
                        return (
                            <Button key={linkType} onClick={() => onPageChange(link)}>
                                {buttonProperties[linkType as keyof typeof buttonProperties]}
                            </Button>)
                    })}
            </StyledPagination>
        </>
    )

}