import fsExtra from 'fs-extra'
import Promise from 'bluebird'
import { format } from 'sql-formatter'
import * as recast from 'recast'
import fg from 'fast-glob'
import path from 'path'
import _ from 'lodash'

const fs = Promise.promisifyAll(fsExtra)

const formatSql = str => format(str, {
  keywordCase: 'upper',
  tabWidth: 2
})

const ROOT = process.cwd()

async function run () {
  const directories = await fg('**/index.test.ts', {
    cwd: path.join(ROOT, 'src/core')
  })

  for (let i = 0; i < directories.length; i++) {
    const directory = directories[i]

    const testDir = path.join(ROOT, 'src/core', directory)
    const fileContent = await fs.readFileAsync(testDir, 'utf8')

    const ast = recast.parse(fileContent)

    const fnName = directory.replace('/index.test.ts', '')

    const markdownDir = path.join(ROOT, 'src/core', fnName, 'index.md')
    const isMarkdownExists = await fs.pathExistsAsync(markdownDir)
    const markdown = isMarkdownExists
      ? await fs.readFileAsync(markdownDir, 'utf8')
      : null

    const markdowns = []
    recast.visit(ast, {
      visitCallExpression (path) {
        const { callee } = path.node
        // @ts-ignore
        if (callee.name === 'test') {
        // @ts-ignore
          const title = path.node.arguments[0].value

          // @ts-ignore
          const functionContent = path.node.arguments[1].body

          /**
       * Remove `expect(result).toBe(expected)`
       */
          functionContent.body.pop()

          const outputLiteral = _.last(functionContent.body)
          // @ts-ignore
          const outputCode = recast.print(outputLiteral).code
            .replace('const expected = "', '')
            .replace(/"$/, '')

          const expectedOutput = formatSql(outputCode)

          /**
       * Remove `const expected`
       */
          functionContent.body.pop()

          const jsSample = functionContent.body
            .map(body => recast.print(body).code)
            .join('\n\n')

          markdowns.push({
            title,
            code: jsSample,
            expectedOutput
          })
        }

        return false
      }
    })

    let markdownContent = [
      '<!-- This content is auto generated /scripts/writeUtilityDocs.ts  -->',
      `# ${fnName}`,
      '',
      markdown,
      '\n',
      '--------',
      '\n',
      '### Demo'
    ]

    markdowns.forEach(curr => {
      markdownContent.push(`## ${curr.title}`)
      markdownContent.push('::: code-group')
      markdownContent.push('```js [Syntax]')
      markdownContent.push(curr.code)
      markdownContent.push('```')
      markdownContent.push('```sql [Output]')
      markdownContent.push(curr.expectedOutput)
      markdownContent.push('```')
      markdownContent.push(':::')
    })

    fs.writeFileSync(
      path.join(ROOT, `docs/utility/${fnName}.md`),
      markdownContent.join('\n')
    )
  }
}

run()
