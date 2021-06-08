import { spawn } from 'child_process'
import fs from 'fs-extra'

const ReactApp = (app) => {
  try {
    spawn(`npx create-react-app ${app} && cd ${app}`, [], {
      shell: true,
      stdio: 'inherit',
    }).on('exit', () => {
      fs.unlink(`./frontend/Readme.md`)
    })
  } catch (error) {
    console.log(error)
  }
}
export { ReactApp }
