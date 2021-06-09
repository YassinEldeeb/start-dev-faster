import fs from 'fs-extra'
import { spawn, execSync } from 'child_process'
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
      writeFileSync(cwd + `/${app}/.gitignore`, gitignore)

      spawn(
        `cd ${app} && npm init -y && npm i express mongoose nodemon dotenv colors --prefix`,
        [],
        {
          shell: true,
          stdio: 'inherit',
        }
      ).on('exit', async () => {
        await modfiyPackage(null, app)
        execSync(`cd ${app} && git init && git add . && git commit -m"init"`)
        console.log(
          'git initilized and all files are commited to init'.cyan.underline
            .bold
        )
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export { ExpressApp }
