export type TStudent = {
  id?: string
  name: string
  email: string
  phone: string
  state: string
}

export interface IApi {
  createStudent: (student: TStudent) => Promise<void>
  getAllStudents: () => Promise<TStudent[]>
}
