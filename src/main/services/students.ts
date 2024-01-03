import { TStudent } from '../../interfaces'
import { StudentModel } from '../models'

export async function createStudent(student: TStudent): Promise<void> {
  try {
    await StudentModel.create({
      ...student
    })
  } catch (error) {
    console.log('createStudent error: >=>', error)
  }
}

export async function getAllStudents(): Promise<TStudent[] | void> {
  try {
    const result = await StudentModel.findAll()

    const students: TStudent[] = result.map((model: any) => ({
      name: model.name,
      email: model.email,
      phone: model.phone,
      state: model.state,
      id: model.id
    }))

    return students
  } catch (error) {
    console.log('getAllStudents error: >=>', error)
  }
}
