import React from 'react';
import Image from 'next/image';

type Props = {};

const NewChatRow = (props: Props) => {
  return (
    <div
      className={`
      relative
      flex flex-row gap-x-3
      items-center
      w-full
      min-h-[60px]
      bg-chat-background
      rounded-lg
      py-1 px-2
      bg-opacity-40
      hover:cursor-pointer
      hover:bg-opacity-70
      duration-200
      `}
    >
      <div className='relative rounded-full overflow-hidden w-[45px] h-[45px]'>
        <Image
          src="/images/test.jpg"
          alt='room image'
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      {/* Information (column) */}
      <div className='w-2/3'>
        <div className='text-md font-gray-700 truncate'>
          New Chat Title
        </div>

        <div className='text-xs font-gray-500 truncate'>
          My status is busy
        </div>
      </div>
    </div>
  );
};

export default NewChatRow;
