const studentsHandlersAssertion = {
  create: 'student:create',
  update: 'student:update',
  getAll: 'student:getAll',
  delete: 'student:delete'
} as const

export type TStudentsHandlers = typeof studentsHandlersAssertion

export const studentsHandlers: TStudentsHandlers = studentsHandlersAssertion
