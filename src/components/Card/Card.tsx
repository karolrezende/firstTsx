import React from 'react'
import { iUser } from '../../App'

export default function Card(user : iUser) {
    console.log(user.nome, user.hobby)
  return (
    <div>
        <p>{user.nome}</p>
        <p>{user.idade}</p>
        <p>{user.hobby}</p>
    </div>
  )
}
