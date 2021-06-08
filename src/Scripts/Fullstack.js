import fs from 'fs-extra'
import { ReactApp } from './Frontend.js'
import { spawn } from 'child_process'
import modfiyPackage from '../utils/modifyPackage.js'
import path from 'path'
const __dirname = path.resolve()
const cwd = process.cwd()

const FullStackApp = async () => {
  const srcDir = `${__dirname}/src/backendBoilerplate`
  const destDir = `${cwd}/backend`

  if (!fs.existsSync(destDir)) {
    try {
      await fs.copy(srcDir, destDir)
      await fs.rename(`${destDir}/.env`, `${destDir}/../.env`)
      await fs.copy(`${__dirname}/src/Scripts/Readme.md`, './Readme.md')
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
