import React from 'react'

type Props = {}

const BottomMenu = (props: Props) => {
  return (
    <div className={`w-full flex flex-row items-center h-[10dvh] py-2 px-4`}>
      <div className='text-gray-500'>
        Enter your message here...
      </div>
    </div>
  )
}

export default BottomMenu