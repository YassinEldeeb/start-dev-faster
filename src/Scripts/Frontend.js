import { spawn } from 'child_process'
import fs from 'fs-extra'

const ReactApp = (app, fullstack) => {
  try {
    spawn(
      `${fullstack ? 'cd ./fullstack && ' : ''}npx create-react-app ${app}`,
      [],
      {
        shell: true,
        stdio: 'inherit',
      }
    ).on('exit', () => {
      fs.unlink(`./frontend/Readme.md`)
    })
  } catch (error) {
    console.log(error)
  }
}
export { ReactApp }
