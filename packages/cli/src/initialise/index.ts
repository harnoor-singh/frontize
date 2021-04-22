import * as fs from 'fs'

const initialise = () => {
    const currDir = process.cwd()
    console.log(fs.readdirSync(currDir))
}

export { initialise }