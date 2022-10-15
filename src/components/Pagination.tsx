import { useState } from "react";
import { BsChevronBarLeft, BsChevronLeft, BsChevronRight, BsChevronBarRight } from "react-icons/bs";
import { Button } from "./Button"
import StyledPagination from "./styles/Pagination.styled"

export interface IPagination {
   first: string,
   prev?: string,
   next?: string,
   last: string
}

type PaginationProps = {
   paginationLinks?: IPagination
   onPageChange: (link: string) => void
   totalItems: number
   itemsPerPage: number
}

export function Pagination({ paginationLinks, onPageChange, totalItems, itemsPerPage }: PaginationProps) {

   const [currentPage, setCurrentPage] = useState(1)

   const calculateNext = () => {
      const last = calculateLast()
      const next = currentPage + 1
      return next > last ? last : next
   }

   const calculatePrev = () => {
      const prev = currentPage - 1
      return prev === 0 ? 1 : prev
   }

   const calculateLast = () => Math.ceil(totalItems / itemsPerPage)

   const buttonProperties = {
      'first': { reactElement: <><BsChevronBarLeft /><span className='btn-text'>{' Primeira'}</span></>, calculatePage: () => 1 },
      'prev': { reactElement: <><BsChevronLeft /><span className='btn-text'>{' Anterior'}</span></>, calculatePage: calculatePrev },
      'next': { reactElement: <><span className='btn-text'>{'Próxima '}</span><BsChevronRight /></>, calculatePage: calculateNext },
      'last': { reactElement: <><span className='btn-text'>{'Última '}</span><BsChevronBarRight /></>, calculatePage: calculateLast }
   }

   const updateCurrentPage = (link: string, calculatePage: () => number) => {
      onPageChange(link)
      setCurrentPage(calculatePage())
   }

   return (
      <>
         <StyledPagination>
            {
               paginationLinks &&
               <div className='buttons'>
                  {Object.entries(paginationLinks).map(([linkType, link]) => {
                     const { reactElement, calculatePage } = buttonProperties[linkType as keyof typeof buttonProperties]
                     return (
                        <Button key={linkType} onClick={() => updateCurrentPage(link, calculatePage)}>
                           {reactElement}
                        </Button>)
                  })}
               </div>
            }
            <p style={{ textAlign: 'center' }}>{currentPage} de {calculateLast()}</p>
         </StyledPagination>
      </>
   )

}