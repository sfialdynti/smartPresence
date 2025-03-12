// import "bootstrap-icons/font/bootstrap-icons.css";

module.exports = {
  content: ["./sidebar.html", "./pages/overview.html", "./index.html", "./pages/account.html", "./sidebar.js", "./pages/login.html", "./public/**/*.html", "./src/**/*.{html,js}"],
  safelist: ["hidden"],
  theme: {
    extend: {
      fontFamily : {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors : {
        "brightAzure": "#008bff",
        "dodgerBlue": "#0163c6",
        "goldenYellow": "#f1b813",
        "skyBlue": "#00aaff",
        "brightBlue": "#0180FF",
        "brightGold": "#efd01b",
        "aliceBlue": "#f9fbfd",
        "charcoalBlack": "#131919"
      }
    },
  },
  plugins: [],
}
