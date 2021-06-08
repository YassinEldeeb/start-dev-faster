import fs from 'fs-extra'
import { ReactApp } from './Frontend.js'
import { spawn } from 'child_process'
import modfiyPackage from '../utils/modifyPackage.js'
const { writeFileSync } = fs
// Backend Files
const mongoose = fs.readFileSync(
  new URL('../backendBoilerplate/db/mongoose.js', import.meta.url)
)
const server = fs.readFileSync(
  new URL('../backendBoilerplate/server.js', import.meta.url)
)
const middlewares = fs.readFileSync(
  new URL(
    '../backendBoilerplate/middlewares/errMiddlewares.js',
    import.meta.url
  )
)
const env = fs.readFileSync(
  new URL('../backendBoilerplate/.env', import.meta.url)
)
const cwd = process.cwd()

const FullStackApp = async () => {
  const destDir = `${cwd}/backend`

  if (!fs.existsSync(destDir)) {
    try {
      await fs.mkdirSync(cwd + '/fullstack')

      await fs.mkdirSync(cwd + '/fullstack/backend')
      writeFileSync(cwd + '/backend/server.js', server)
      await fs.mkdirSync(cwd + '/backend/db')
      writeFileSync(cwd + '/backend/db/mongoose.js', mongoose)
      await fs.mkdirSync(cwd + '/backend/middlewares')
      writeFileSync(cwd + '/backend/middlewares/errMiddlewares.js', middlewares)
      writeFileSync(cwd + '/.env', env)
      spawn(
        `npm init -y && npm i express mongoose nodemon concurrently dotenv colors`,
        [],
        {
          shell: true,
          stdio: 'inherit',
        }
      ).on('exit', async () => {
        modfiyPackage(true)
        ReactApp('frontend', true)
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export { FullStackApp }
