import fs from 'fs-extra'
import { ReactApp } from './Frontend.js'
import { spawn } from 'child_process'
import modfiyPackage from '../utils/modifyPackage.js'

const FullStackApp = async () => {
  const srcDir = `./src/backendBoilerplate`
  const destDir = `./backend`

  if (!fs.existsSync(destDir)) {
    try {
      await fs.copy(srcDir, destDir)
      await fs.rename(`${destDir}/.env`, './.env')
      await fs.copy(`./src/Scripts/Readme.md`, './Readme.md')
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
