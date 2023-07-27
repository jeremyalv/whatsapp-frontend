import React from 'react'
import Image from 'next/image'

type Props = {

}

const RoomRow = ({

}: Props) => {
  return (
    <div className='flex flex-row my-1 py-3 px-4 rounded-lg bg-gray-400 bg-opacity-50'>
      <div className='relative rounded-full overflow-hidden w-[60px] h-[60px]'>
        <Image
          src="/images/test.jpg"
          alt='room image'
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  )
}

export default RoomRow