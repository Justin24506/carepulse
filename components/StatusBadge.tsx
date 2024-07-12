import { StatusIcon } from '@/constants'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

const StatusBadge = ({ status }: {status: Status }) => {
  return (
    <div className={clsx('status-badge',{
      'bg-green-600': status === 'scheduled'||'Scheduled',
      'bg-blue-600': status === 'pending'||'Pending',
      'bg-red-600': status === 'cancelled'||'Cancelled',
      
    })}>
      <Image 
        src={StatusIcon[status]}
        alt={status}
        width={24}
        height={24}
        className='hi-fit w-3'
        />
        <p className={clsx('text-12-semibold',{
          'text-green-500': status === 'scheduled'||'Scheduled',
          'text-blue-500': status === 'pending'||'Pending',
          'text-red-500': status === 'cancelled'||'Cancelled',
        })}>

        </p>
    </div>
  )
}

export default StatusBadge