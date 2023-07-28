import React, { LegacyRef } from 'react'

import {
  LiaSearchSolid
} from "react-icons/lia";

type Props = {
  type: string,
  placeholder?: string,
  ref?: LegacyRef<HTMLInputElement>,
  className?: string,
}

const SearchRoom = ({
  type,
  placeholder,
  ref,
  className
}: Props) => {
  return (
    <div className='relative flex flex-row justify-between items-center'>
      <input
        type={type}
        placeholder={placeholder ? placeholder : "Search anything"}
        className={`peer flex h-10 w-full rounded-md border-input border-slate-400 border-2 bg-background px-3 py-2 text-sm ring-offset-background font-inter placeholder:font-inter file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary-500 focus-visible:border-2 transition duration-300
        focus-visible:ring-1 focus-visible:ring-primary-500
        focus-visible:drop-shadow 
        disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
      />

      <LiaSearchSolid className="absolute text-xl text-slate-500 right-[16px] peer-focus-visible:text-primary-500 peer-focus-visible:transition peer-focus-visible:duration-300" />
    </div>
  )
}

export default SearchRoom