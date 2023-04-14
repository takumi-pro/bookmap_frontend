module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'docs',
        'style',
        'factor',
        'perf',
        'test',
        'chore',
        'remove',
        'move',
      ],
    ],
  },
};
