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
        DEFAULT: '.5rem',
        sm: '.5rem', // SP画面：640px 以上から影響
        md: '.5rem', // PC画面：768px 以上から影響
        lg: '.5rem', // 大画面：1024px 以上から影響
      },
    },
  },
  plugins: [],
}
