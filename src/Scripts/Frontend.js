import { spawn, execSync } from 'child_process'
import fs from 'fs-extra'

const ReactApp = (app, fullstack) => {
  try {
    spawn(
      `${fullstack ? `cd ./${fullstack} &&` : ''}npx create-react-app ${app}`,
      [],
      {
        shell: true,
        stdio: 'inherit',
      }
    ).on('exit', () => {
      if (fullstack) {
        const gitLocation = './' + fullstack + '/' + app + '/.git'
        const gitIgnoreLocation = './' + fullstack + '/' + app + '/.gitignore'
        fs.rmSync(gitLocation, { recursive: true })
        fs.unlinkSync(gitIgnoreLocation)
        execSync(
          `cd ${fullstack} && git init && git add . && git commit -m"init"`
        )
        console.log(
          'git initilized and all files are commited to init'.cyan.underline
            .bold
        )
      }
    })
  } catch (error) {
    console.log(error)
  }
}
export { ReactApp }
