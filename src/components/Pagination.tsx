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
        'first': <><BsChevronBarLeft /><span className='btn-text'>{' Primeira'}</span></>,
        'prev': <><BsChevronLeft /><span className='btn-text'>{' Anterior'}</span></>,
        'next': <><span className='btn-text'>{'Próxima '}</span><BsChevronRight /></>,
        'last': <><span className='btn-text'>{'Última '}</span><BsChevronBarRight /></>
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