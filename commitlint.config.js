module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(?:#(\d+)\s)?(.+)$/,
      headerCorrespondence: ['issue', 'subject']
    }
  },
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'perf',
        'ci',
        'build',
        'revert'
      ]
    ],
    'subject-case': [0],
    'subject-empty': [0],
    'subject-full-stop': [0],
    'header-max-length': [2, 'always', 100]
  }
};