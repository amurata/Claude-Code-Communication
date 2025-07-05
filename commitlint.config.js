// AI駆動開発向けカスタムルール
const customRules = {
  'no-ambiguous-terms': (parsed) => {
    const message = parsed.header;
    const discouragedTerms = [
      { term: 'usr', correct: 'user' },
      { term: 'cmd', correct: 'command' },
      { term: 'sess', correct: 'session' },
      { term: 'auth', correct: 'authentication' },
      { term: 'resp', correct: 'response' },
      { term: 'req', correct: 'request' },
      { term: 'impl', correct: 'implement' },
      { term: 'config', correct: 'configuration' }
    ];
    
    for (const { term, correct } of discouragedTerms) {
      if (message.toLowerCase().includes(term)) {
        return [false, `表記揺れエラー: "${term}" の代わりに "${correct}" を使用してください`];
      }
    }
    return [true];
  },
  
  'require-domain-tag': (parsed) => {
    const { type } = parsed;
    const header = parsed.header;
    
    if (['feat', 'fix'].includes(type)) {
      if (!header.includes('[domain:')) {
        return [false, `${type}タイプには [domain:xxx] タグが必須です`];
      }
    }
    return [true];
  }
};

module.exports = {
  extends: ['@commitlint/config-conventional'],
  
  // カスタムパーサー: 自動追加される#123とdomain/tagsタグに対応
  // extends の後に定義することでデフォルトパーサーを上書き
  parserPreset: {
    parserOpts: {
      headerPattern: '^(?:#(\\d+)\\s+)?(\\w+)(?:\\(([^\\)]+)\\))?\\s*:\\s+(.+?)(?:\\s+\\[domain:([^\\]]+)\\])?(?:\\s+\\[tags:([^\\]]+)\\])?$',
      headerCorrespondence: ['issue', 'type', 'scope', 'subject', 'domain', 'tags']
    }
  },
  plugins: [
    {
      rules: customRules
    }
  ],
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
    // type-empty無効化: カスタムパーサーが動作するまでの間、
    // デフォルトパーサーがtypeを検出できずエラーになるため
    'type-empty': [0],
    'subject-empty': [0],
    'subject-full-stop': [0],
    'header-max-length': [2, 'always', 150],
    
    // AI駆動開発カスタムルール
    'no-ambiguous-terms': [2, 'always'],
    'require-domain-tag': [2, 'always']
  }
};