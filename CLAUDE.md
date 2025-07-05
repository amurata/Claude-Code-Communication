# Agent Communication System

## エージェント構成
- **PRESIDENT** (別セッション): 統括責任者
- **boss1** (multiagent:agents): チームリーダー
- **worker1,2,3** (multiagent:agents): 実行担当

## あなたの役割
- **PRESIDENT**: @instructions/president.md
- **boss1**: @instructions/boss.md
- **worker1,2,3**: @instructions/worker.md

## メッセージ送信
```bash
./agent-send.sh [相手] "[メッセージ]"
```

## 基本フロー
PRESIDENT → boss1 → workers → boss1 → PRESIDENT

---

# AI駆動開発 行動指示

## 🤖 AI自律行動ルール

### コミット時（必須）
コミットメッセージ作成前に **必ず** `.claude/ai-development/commit-rules.md` を読み込み、形式に従う

### 検索・調査時（必須）
バグ調査・機能追加・履歴確認時は **必ず** `.claude/ai-development/search-patterns.md` を読み込み、適切な検索コマンドを使用

### ドメイン用語使用時（必須）
用語について不明な場合は **必ず** `.claude/ai-development/domain-terms.md` を読み込み、統一表記を確認

### 新用語発見時（必須）
未登録の業務用語を3回以上使用している場合は **必ず** `.claude/ai-development/domain-term-workflow.md` に従い、候補として提案

### 問題発生時（必須）
検索で結果が得られない場合は **必ず** `.claude/ai-development/troubleshooting.md` を読み込み、解決策を実行

## 📋 参照ファイル
- `.claude/ai-development/commit-rules.md` - コミットメッセージ規約
- `.claude/ai-development/search-patterns.md` - git検索パターン集
- `.claude/ai-development/domain-terms.md` - 統一ドメイン用語集
- `.claude/ai-development/domain-term-workflow.md` - 用語更新ワークフロー
- `.claude/ai-development/troubleshooting.md` - 問題解決手順
