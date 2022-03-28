module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true, //.container要素を自動で中央にする
      padding: { //ブレークポイントごとに水平パディングを設定する
      },
    },
  },
  plugins: [],
}
