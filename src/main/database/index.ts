// import path from 'path'
import { Sequelize } from 'sequelize'

export const database = new Sequelize({
  dialect: 'sqlite',
  storage: 'main.sqlite'
})
