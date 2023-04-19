import { useState } from 'react'
import {useForm} from 'react-hook-form'
import Card from './components/Card/Card'

export interface iUser {
  nome: string,
  idade: number,
  hobby: string
}
function App() {
  const {register, handleSubmit} = useForm<iUser>()
  const [user, setUser] = useState<iUser>()
  function submit(data: iUser){ 
    setUser({
      nome: data.nome,
      idade: data.idade,
      hobby: data.hobby
    })
    console.log(user)
  }
  return(
    <form onSubmit={handleSubmit(submit)}>
      <label htmlFor="">Nome</label>
      <input type="text" placeholder="digite seu nome" {...register('nome')}/>
      <label htmlFor="">Idade</label>
      <input placeholder="digite sua idade" {...register('idade')}/>
      <label htmlFor="">Hobby</label>
      <input type="text" placeholder="digite seu hobby" {...register('hobby')}/>
      <button type='submit'>Enviar</button>
      {user ? <Card {...user}/> : ''}
    </form>
  )
}

export default App
