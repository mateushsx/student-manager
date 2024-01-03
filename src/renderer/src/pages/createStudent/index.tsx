import { useState } from 'react'
import { TStudent } from 'src/interfaces'
import { useNavigate } from 'react-router-dom'
import { statesOfBrazil } from '@renderer/constants'
import { Button, MenuItem, TextField } from '@mui/material'
import { TitlePage } from '@renderer/components/titlePage'

import './styles.css'

export function CreateStudent(): JSX.Element {
  const [student, setStudent] = useState({} as TStudent)

  const navigate = useNavigate()

  const handleName = (event): void => {
    setStudent((prevState) => ({ ...prevState, name: event.target.value }))
  }

  const handleEmail = (event): void => {
    setStudent((prevState) => ({ ...prevState, email: event.target.value }))
  }

  const handlePhone = (event): void => {
    setStudent((prevState) => ({ ...prevState, phone: event.target.value }))
  }

  const handleState = (event): void => {
    setStudent((prevState) => ({ ...prevState, state: event.target.value }))
  }

  const handleCreateStudent = async (): Promise<void> => {
    await window.api.createStudent(student)
    navigate('/')
  }

  return (
    <div className="CreateStudent">
      <TitlePage text="Cadastrar" />

      <section className="CreateStudent__form">
        <TextField variant="filled" label="Nome" onChange={handleName} />
        <TextField variant="filled" label="Email" type="email" onChange={handleEmail} />
        <TextField variant="filled" label="Telefone" type="tel" onChange={handlePhone} />
        <TextField variant="filled" label="Estado" onChange={handleState} select>
          {statesOfBrazil.map((state) => (
            <MenuItem key={state.abbreviation} value={state.name}>
              {state.name}
            </MenuItem>
          ))}
        </TextField>

        <Button variant="contained" onClick={handleCreateStudent}>
          Cadastrar
        </Button>
      </section>
    </div>
  )
}
