import fg from 'fast-glob'
import path from 'path'
import dedent from 'dedent'
import fs from 'fs'

const root = process.cwd()
async function run () {
  let imports = ''
  let extensions = ''

  const directories = await fg('**/index.ts', {
    cwd: path.join(root, 'src/core')
  })

  directories.forEach(directory => {
    const fnName = directory.replace('/index.ts', '')
    imports += `import { ${fnName} } from './core/${fnName}'\n`
    extensions += `knex.QueryBuilder.extend(${fnName}.name, ${fnName})\n`
  })

  const template = dedent(`
  /**Do not change, this is programmatically updated**/

    ${imports}
    export default knex => {
      ${extensions}

      return knex
    }
  `)

  fs.writeFileSync('./src/index.ts', template)
}

run()

