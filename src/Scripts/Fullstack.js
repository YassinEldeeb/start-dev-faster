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
  const destDir = `${cwd}/fullstack/backend`

  if (!fs.existsSync(destDir)) {
    try {
      await fs.mkdirSync(cwd + '/fullstack')

      await fs.mkdirSync(cwd + '/fullstack/backend')
      writeFileSync(cwd + '/fullstack/backend/server.js', server)
      await fs.mkdirSync(cwd + '/fullstack/backend/db')
      writeFileSync(cwd + '/fullstack/backend/db/mongoose.js', mongoose)
      await fs.mkdirSync(cwd + '/fullstack/backend/middlewares')
      writeFileSync(
        cwd + '/fullstack/backend/middlewares/errMiddlewares.js',
        middlewares
      )
      writeFileSync(cwd + '/fullstack/.env', env)
      spawn(
        `cd fullstack && npm init -y && npm i express mongoose nodemon concurrently dotenv colors`,
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
