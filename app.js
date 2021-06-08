#!/usr/bin/env node
import inquirer from 'inquirer'
import { ReactApp } from './Scripts/Frontend.js'
import { ExpressApp } from './Scripts/Backend.js'
import { FullStackApp } from './Scripts/Fullstack.js'

const askForProjectType = () => {
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
          ReactApp(value.toLowerCase())
          break
        case 'Backend':
          ExpressApp(value.toLowerCase())
          break
        case 'Full Stack':
          FullStackApp(value.toLowerCase())
          break
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

askForProjectType()
