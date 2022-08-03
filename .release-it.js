const changelogCmd = `npx auto-changelog --stdout --commit-limit false -u --template ./config/changelog.hbs`

module.exports = {
  hooks: {
    'after:bump': [changelogCmd],
    'after:git-release': [
      'git add CHANGELOG.md',
      'git push origin master',
      'echo Successfully released ${name} v${version} to ${repo.repository}.'
    ]
  },
  git: {
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
    publish: false
  }
}