
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

    const buttonDisplayText = {
        'first': 'Primeiro',
        'prev': 'Anterior',
        'next': 'Próximo',
        'last': 'Último',
    }

    return (
        <>
            {
                paginationLinks &&
                Object.entries(paginationLinks).map(([linkType, link]) => {
                    return <button key={linkType} onClick={() => onPageChange(link)}>
                        {buttonDisplayText[linkType as keyof typeof buttonDisplayText]}
                    </button>
                })}

        </>
    )


}