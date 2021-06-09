import fs from 'fs-extra'

const modfiyPackage = (fullstack, app) => {
  const promise = new Promise(async (resolve, _) => {
    const data = JSON.parse(
      await fs.readFile(
        fullstack ? `./${app}/package.json` : `./${app}/package.json`,
        'utf8'
      )
    )

    // Place Module type in a specific Location
    const keyValues = Object.entries(data)
    keyValues.splice(4, 0, ['type', 'module'])
    const dataObj = Object.fromEntries(keyValues)

    // Delete Test Script and add Dev script
    delete dataObj.scripts.test
    if (!fullstack) {
      dataObj.scripts.dev = 'nodemon -r dotenv/config server.js'
      dataObj.scripts.start = 'node -r dotenv/config server.js'
    } else {
      dataObj.scripts.start = 'node -r dotenv/config backend/server.js'
      dataObj.scripts.server = 'nodemon -r dotenv/config backend/server.js'
      dataObj.scripts.client = 'npm start --prefix frontend'
      dataObj.scripts.dev = 'concurrently "npm run server" "npm run client"'
    }
    dataObj.scripts.db =
      '/Users/ov/mongodb/bin/mongod.exe --dbpath=/Users/ov/mongodb-data'

    // Write new Package.json
    await fs.writeFile(
      fullstack ? `./${app}/package.json` : `./${app}/package.json`,
      JSON.stringify(dataObj, null, 2),
      'utf-8'
    )
    resolve()
  })

  return promise
}

export default modfiyPackage
