import fs from 'fs-extra'
import { spawn } from 'child_process'
import modfiyPackage from '../utils/modifyPackage.js'
import path from 'path'
const __dirname = path.resolve()
const cwd = process.cwd()

const ExpressApp = async (app) => {
  const srcDir = `${__dirname}/src/backendBoilerplate`
  const destDir = `${cwd}/${app}`

  if (!fs.existsSync(destDir)) {
    try {
      await fs.copy(srcDir, destDir)

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
