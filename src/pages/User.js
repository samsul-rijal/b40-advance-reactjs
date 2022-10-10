import React from 'react'
import {users} from "../dataDummy/users"
import {useNavigate} from "react-router-dom"

function User() {

    const navigate = useNavigate()

  return (
    <div>
        {users.map((item, index) => (
            <div onClick={() => navigate(`/detail-user/${index}`)}>
                <h2>{item.name}</h2>
                <p>{item.email}</p>
            </div>
        ))}
    </div>
  )
}

export default User