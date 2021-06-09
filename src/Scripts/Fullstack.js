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
const gitignore = fs.readFileSync(
  new URL('../backendBoilerplate/gitignore.txt', import.meta.url)
)

const cwd = process.cwd()

const FullStackApp = async (app) => {
  const destDir = `${cwd}/${app}/backend`

  if (!fs.existsSync(destDir)) {
    try {
      await fs.mkdirSync(cwd + `/${app}`)

      await fs.mkdirSync(cwd + `/${app}/backend`)
      writeFileSync(cwd + `/${app}/backend/server.js`, server)
      await fs.mkdirSync(cwd + `/${app}/backend/db`)
      writeFileSync(cwd + `/${app}/backend/db/mongoose.js`, mongoose)
      await fs.mkdirSync(cwd + `/${app}/backend/middlewares`)
      writeFileSync(
        cwd + `/${app}/backend/middlewares/errMiddlewares.js`,
        middlewares
      )
      writeFileSync(cwd + `/${app}/.env`, env)
      writeFileSync(cwd + `/${app}/.gitignore`, gitignore)

      spawn(
        `cd ${app} && npm init -y && npm i express mongoose nodemon concurrently dotenv colors`,
        [],
        {
          shell: true,
          stdio: 'inherit',
        }
      ).on('exit', async () => {
        modfiyPackage(true, app)
        ReactApp('frontend', app)
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export { FullStackApp }
