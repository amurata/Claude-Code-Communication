# ドメイン用語更新ワークフロー

## AI自律的用語発見

### 新用語検出時の行動
1. **頻出度チェック**: 3回以上使用された未登録用語を候補とする
2. **コンテキスト分析**: ファイルパス、周辺コードから ドメイン性を判定
3. **候補提案**: domain-terms.mdの「候補用語」セクションに自動追加

### 判定基準
```
ドメイン用語の可能性 = 高
- src/domain/, src/models/ 内で使用
- クラス名・メソッド名で使用  
- 複合語で明確に業務概念

汎用用語の可能性 = 高  
- src/utils/, src/common/ 内で使用
- 技術的な処理名
- 既知の技術用語
```

## 人間による承認フロー

### AIからの提案例
```
💡 新しいドメイン用語を発見しました：

候補: "shopping-cart"
使用箇所: src/ecommerce/cart.ts (5回)
コンテキスト: ショッピングカート機能
推奨ドメイン: ecommerce

この用語をドメイン用語として登録しますか？
```

### 承認後の自動処理
1. domain-terms.mdの正式セクションに移動
2. 関連するタグ・ドメイン設定を提案  
3. 過去のコミットメッセージで表記揺れをチェック

## 段階的実装戦略

### Phase 1（即座に実装可能）
- 候補用語セクションの追加
- AIによる能動的な用語提案

### Phase 2（中期）  
- ファイルパス分析による自動判定
- 使用頻度による候補抽出

### Phase 3（長期）
- 自然言語処理による高度な判定
- 既存コードベース全体の用語抽出