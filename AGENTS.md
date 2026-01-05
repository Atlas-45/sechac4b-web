# Repository Guidelines

## Project Structure & Module Organization
- `app/` に Next.js App Router のページコンポーネントを配置（例: `app/page.tsx`, `app/works/page.tsx`）。
- `public/` は静的アセット置き場。プレス素材は `public/press/`。
- 主要設定は `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`。
- 現状 `tests/` は未導入。

## Build, Test, and Development Commands
リポジトリ直下で実行します。
- `npm install` 依存関係の導入
- `npm run dev` 開発サーバー起動（`http://localhost:3000`）
- `npm run build` 本番ビルド
- `npm run start` 本番サーバー起動（build 後）
- `npm run lint` ESLint 実行

## Coding Style & Naming Conventions
- TypeScript + React（Next.js App Router）を使用。
- インデントは 2 スペース。
- ルート構成は Next.js 既定の命名（`page.tsx`, `layout.tsx`）。
- スタイルは原則 `app/globals.css` に集約。例外的な inline は最小限。

## Testing Guidelines
- テスト基盤は未整備。追加する場合は `__tests__/` または `tests/` に配置。
- テスト名は `*.test.ts(x)` を推奨。追加時は実行コマンドをドキュメント化。

## Commit & Pull Request Guidelines
- 既存コミットは短い日本語要約（例: 「WordPress風レイアウトに調整」）。同様に簡潔に。
- PR には以下を含める：
  - 変更概要（1〜3行）
  - UI変更がある場合はスクリーンショット
  - 新規コマンドや設定の補足

## Security & Configuration Tips
- 機密情報は `public/` や `app/` に置かない。
- 環境変数は `.env.local` を使用し、`README.md` に必要項目を記載（コミットしない）。
