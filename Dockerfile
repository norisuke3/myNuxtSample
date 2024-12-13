# ベースイメージとして軽量な Node.js イメージを使用
FROM node

# 環境変数を設定
ENV NODE_ENV=production

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# 必要なファイルをコピー
COPY .output /usr/src/app

# 必要に応じて node_modules をコピー（省略可）
# COPY node_modules /usr/src/app/node_modules

# 必要なポートを公開
EXPOSE 3000

# アプリケーションの実行コマンド
CMD ["node", "/usr/src/app/server/index.mjs"]
