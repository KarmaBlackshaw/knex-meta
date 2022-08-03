const changelogCmd = `npx auto-changelog --commit-limit false --template ./templates/changelog.hbs`
const buildCmd = 'npm run build'

module.exports = {
  hooks: {
    'after:bump': [
      changelogCmd,
      'npm run build',
      'git add .'
    ]
  },
  git: {
    "requireCleanWorkingDir": false,
    requireBranch: 'master',
    commit: true,
    commitMessage: 'chore(release): ${version}',
    commitArgs: '',
    tag: true,
    tagName: '${version}',
    tagAnnotation: '${version}',
    push: true,
    requireCommits: true,
    changelog: changelogCmd
  },
  github: {
    release: false,
    releaseName: '${version}'
  },
  npm: {
    publish: true
  }
}