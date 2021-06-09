import fs from 'fs-extra'
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

const ExpressApp = async (app) => {
  const destDir = `${cwd}/${app}`

  if (!fs.existsSync(destDir)) {
    try {
      await fs.mkdirSync(cwd + `/${app}`)
      writeFileSync(cwd + `/${app}/server.js`, server)
      await fs.mkdirSync(cwd + `/${app}/db`)
      writeFileSync(cwd + `/${app}/db/mongoose.js`, mongoose)
      await fs.mkdirSync(cwd + `/${app}/middlewares`)
      writeFileSync(cwd + `/${app}/middlewares/errMiddlewares.js`, middlewares)
      writeFileSync(cwd + `/${app}/.env`, env)

      spawn(
        `cd ${app} && npm init -y && npm i express mongoose nodemon dotenv colors`,
        [],
        {
          shell: true,
          stdio: 'inherit',
        }
      ).on('exit', () => modfiyPackage(null, app))
    } catch (err) {
      console.log(err)
    }
  }
}

export { ExpressApp }
