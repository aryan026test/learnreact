import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const params = useParams()
    const userId = params.userID

    //line 5 and 6 can also be written like:
    //const { userId } = userParams()
  return (
    <div>
      Details About Users {userId}
    </div>
  )
}

export default UserDetails
