#!/usr/bin/env node
import inquirer from 'inquirer'
import { ReactApp } from './Scripts/Frontend.js'
import { ExpressApp } from './Scripts/Backend.js'
import { FullStackApp } from './Scripts/Fullstack.js'

const askForProjectType = () => {
  const appName = process.argv[2]
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'value',
        message: 'Please select what type of app you wanna make',
        choices: ['Full Stack', 'Frontend', 'Backend'],
      },
    ])
    .then(({ value }) => {
      switch (value) {
        case 'Frontend':
          ReactApp(appName.toLowerCase())
          break
        case 'Backend':
          ExpressApp(appName.toLowerCase())
          break
        case 'Full Stack':
          FullStackApp(appName.toLowerCase())
          break
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

askForProjectType()
