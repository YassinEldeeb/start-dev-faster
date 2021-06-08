import fs from 'fs-extra'
import { spawn } from 'child_process'
import modfiyPackage from '../utils/modifyPackage.js'
const { writeFileSync } = fs
// Backend Files
const mongoose = fs.readFileSync('./src/backendBoilerplate/db/mongoose.js')
const server = fs.readFileSync('./src/backendBoilerplate/server.js')
const middlewares = fs.readFileSync(
  './src/backendBoilerplate/middlewares/errMiddlewares.js'
)
const env = fs.readFileSync('./src/backendBoilerplate/.env')

const cwd = process.cwd()

const ExpressApp = async (app) => {
  const destDir = `${cwd}/${app}`

  if (!fs.existsSync(destDir)) {
    try {
      await fs.mkdirSync(cwd + '/backend')
      writeFileSync(cwd + '/backend/server.js', server)
      await fs.mkdirSync(cwd + '/backend/db')
      writeFileSync(cwd + '/backend/db/mongoose.js', mongoose)
      await fs.mkdirSync(cwd + '/backend/middlewares')
      writeFileSync(cwd + '/backend/middlewares/errMiddlewares.js', middlewares)
      writeFileSync(cwd + '/backend/.env', env)

      spawn(
        `cd ${app} && npm init -y && npm i express mongoose nodemon dotenv colors`,
        [],
        {
          shell: true,
          stdio: 'inherit',
        }
      ).on('exit', modfiyPackage)
    } catch (err) {
      console.log(err)
    }
  }
}

export { ExpressApp }
