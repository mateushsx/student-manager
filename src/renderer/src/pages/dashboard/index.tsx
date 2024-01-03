import { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { TStudent } from '@interfaces/index'
import { TitlePage } from '@renderer/components/titlePage'

import './styles.css'
import { Delete } from '@mui/icons-material'
import { Button } from '@mui/material'

export function Dashboard(): JSX.Element {
  const [students, setStudents] = useState([] as TStudent[])

  const getAllStudents = async (): Promise<void> => {
    const apiStudents = await window.api.getAllStudents()

    setStudents(apiStudents)
  }

  const handleDeleteStudent = (id: string): void => {
    const newStudents = students.filter((student) => student.id !== id)
    setStudents(newStudents)
  }

  useEffect(() => {
    getAllStudents()
  }, [])

  const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    { field: 'name', headerName: 'Nome', width: 160 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'phone',
      headerName: 'Telefone',
      width: 160
    },
    {
      field: 'state',
      headerName: 'Estado',
      width: 160
    },
    {
      field: 'a',
      headerName: 'Ações',
      sortable: false,
      width: 0,
      renderCell: (params): JSX.Element => {
        console.log('params: >=>', params)
        return (
          <Button color="error" onClick={() => handleDeleteStudent(params.id)}>
            <Delete />
          </Button>
        )
      }
    }
  ]

  return (
    <div className="Dashboard">
      <TitlePage text="Dashboard" />

      <DataGrid rows={students} columns={columns} density="compact" />
    </div>
  )
}
