import { database } from '../database'
import { INTEGER, STRING } from 'sequelize'

export const StudentModel = database.define('student', {
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false
  },
  phone: {
    type: INTEGER,
    allowNull: false
  },
  state: {
    type: STRING,
    allowNull: false
  }
})
