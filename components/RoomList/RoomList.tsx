import React from 'react'
import { FiEdit } from 'react-icons/fi'

type Props = {}

// Chat Sidebar
const RoomList = (props: Props) => {
  return (
    <div>
      <div className='flex flex-row justify-between'>
        <div>
          Chats
        </div>

        <div>
          <FiEdit />
        </div>
      </div>
    </div>
  )
}

export default RoomList