/** @type {import('tailwindcss').Config} */
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_500 = { ...Array.from(Array(501)).map((_, i) => `${i}px`) };

module.exports = {
  // 어디에서 tailwind가 쓰일건지
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}", // pages폴더 안의 모든폴더 안의 모든 파일들, 중괄호 안에는 확장자 (한개만 쓸거면 중괄호 없어도 됨)
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/Components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_500,
      minHeight: px0_500,
      spacing: px0_500,
      colors: {
        primary: "#3888EE",
        success: "#5FBC88",
        error: "#E74456",
        gray01: "#FDFDFD",
        gray02: "#FDFDFD",
        gray03: "#F7F8F9",
        gray04: "#E9EBEE",
        gray05: "#E7E7E7",
        gray06: "#C5C8CD",
        gray07: "#C5C8CD",
        gray08: "#3A4552",
        gray09: "#2A323B",
        gray10: "#161D24",
        "black1/2": "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
