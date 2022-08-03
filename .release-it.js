const changelogCmd = `npx auto-changelog --commit-limit false --template ./templates/changelog.hbs`

module.exports = {
  hooks: {
    'after:bump': [
      changelogCmd,
      'npm run build',
      'git add .'
    ]
  },
  git: {
    requireCleanWorkingDir: true,
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