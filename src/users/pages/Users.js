import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'srk srk',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpyxPvbi0BP6Ov8IdiazLnws2zWE2_q1hOA_4K92AU8A&s',
            places: 10
        },
        {
          id: 'u2',
          name: 'srk srk',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpyxPvbi0BP6Ov8IdiazLnws2zWE2_q1hOA_4K92AU8A&s',
          places: 10
      }
    ]
  return (
    <div>
        <UsersList items={USERS}/>
    </div>
  )
}

export default Users
