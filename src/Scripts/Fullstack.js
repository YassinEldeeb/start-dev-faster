import fs from 'fs-extra'
import { ReactApp } from './Frontend.js'
import { spawn } from 'child_process'
import modfiyPackage from '../utils/modifyPackage.js'
import path from 'path'
const __dirname = path.resolve()
const { writeFileSync } = fs
// Backend Files
const mongoose = fs.readFileSync('./src/backendBoilerplate/db/mongoose.js')
const server = fs.readFileSync('./src/backendBoilerplate/server.js')
const middlewares = fs.readFileSync(
  './src/backendBoilerplate/middlewares/errMiddlewares.js'
)
const env = fs.readFileSync('./src/backendBoilerplate/.env')

const cwd = process.cwd()

const FullStackApp = async () => {
  const destDir = `${cwd}/backend`

  if (!fs.existsSync(destDir)) {
    try {
      await fs.mkdirSync(cwd + '/backend')
      writeFileSync(cwd + '/backend/server.js', server)
      await fs.mkdirSync(cwd + '/backend/db')
      writeFileSync(cwd + '/backend/db/mongoose.js', mongoose)
      await fs.mkdirSync(cwd + '/backend/middlewares')
      writeFileSync(cwd + '/backend/middlewares/errMiddlewares.js', middlewares)
      writeFileSync(cwd + '/backend/.env', env)
      // await fs.copy(`${__dirname}/Readme.md`, `${cwd}/Readme.md`)
      spawn(
        `npm init -y && npm i express mongoose nodemon concurrently dotenv colors`,
        [],
        {
          shell: true,
          stdio: 'inherit',
        }
      ).on('exit', async () => {
        modfiyPackage(true)
        ReactApp('frontend')
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export { FullStackApp }
