/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      bgBlue: "linear-gradient(90deg, rgba(2,48,89,1) 0%, rgba(96,164,191,1) 100%)",
      app: "url('https://cdn.shopify.com/s/files/1/0010/1561/1510/products/papel_grid_pontinhos_cinza.jpg?v=1599531053')",
      app1: "url('https://static.vecteezy.com/ti/vetor-gratis/p3/2401608-padrao-de-grade-em-preto-e-branco-abstrato-gratis-vetor.jpg')",
    },
    gridTemplateRows: {
      layout: "2rem 1fr 1.5rem",
    },
    gridTemplateColumns: {
      editor: "3.5rem 16rem 1fr",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
