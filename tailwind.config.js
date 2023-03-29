/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      'NavyBlue' : '#253141',
      'ForestGreen' : '#10403E',
      'BlueGray' : '#84A6BC',
      'Mimosa' : '#FEF4D7'
    },
    extend: {
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
      },
    },
  },
  plugins: [],
}

