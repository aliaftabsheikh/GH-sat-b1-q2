import { Data } from '@/app/page'
import React, { useContext } from 'react'

const ChildThree = () => {

const user = useContext(Data)

  return (
    <div>{user.firstName}</div>
  )
}

export default ChildThree