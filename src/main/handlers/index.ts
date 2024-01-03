import { ipcMain } from 'electron'
import { TStudent } from '../../interfaces'
import { studentsHandlers } from '../../constants'
import { createStudent, getAllStudents } from '../services'

export function createHandlers(): void {
  ipcMain.handle(studentsHandlers.create, async (_, student: TStudent) => {
    createStudent(student)
  })
  ipcMain.handle(studentsHandlers.getAll, async () => {
    return getAllStudents()
  })
}
