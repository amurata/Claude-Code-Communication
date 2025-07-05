# コミットメッセージ規約

## 基本形式
```
type(scope): #issue description [domain:xxx] [tags:keyword1,keyword2]
```

## 例
```bash
feat(authentication): #123 implement JWT user authentication [domain:authentication] [tags:jwt,login,session]
fix(session): #456 resolve session timeout issue [domain:session] [tags:timeout,cleanup]
refactor(user): #789 extract user profile service [domain:user] [tags:service,extraction]
```

## 必須要素
- **Issue番号**: 自動挿入される
- **ドメインタグ**: `[domain:xxx]` (feat/fixで必須)
- **AIタグ**: `[tags:xxx,yyy]` (検索性向上のため推奨)
- **統一用語**: 略語禁止、domain-terms.mdに従う
