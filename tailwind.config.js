// import "bootstrap-icons/font/bootstrap-icons.css";

module.exports = {
  content: ["./sidebar.html", "./pages/overview.html", "./index.html", "./pages/account.html", "./pages/setting.html", "./pages/allReport.html", "./pages/employeeData.html", "./pages/individualReport.html", "./pages/viewReport.html", "./sidebar.js", "./pages/login.html", "./public/**/*.html", "./src/**/*.{html,js}"],
  safelist: ["hidden"],
  theme: {
    extend: {
      fontFamily : {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors : {
        goldenYellow: {
          100: "#fff4cc", 
          200: "#ffe599", 
          300: "#ffd966", 
          400: "#ffcc33", 
          500: "#f1b813", 
          600: "#d19f11", 
          700: "#b1870e", 
          800: "#926f0b",
          900: "#735708"  
        },
        brightGold: {
          100: "#fff7cc", 
          200: "#ffec99", 
          300: "#ffe066", 
          400: "#ffd533", 
          500: "#efd01b", 
          600: "#d1b518", 
          700: "#b49a14", 
          800: "#968011", 
          900: "#7a660e" 
        },
        skyBlue: {
          100: "#ccf2ff", 
          200: "#99e5ff",
          300: "#66d9ff", 
          400: "#33ccff", 
          500: "#00aaff", 
          600: "#0095e6", 
          700: "#007fcc", 
          800: "#0066b3", 
          900: "#004d99" 
        },
        "brightAzure": "#008bff",
        "dodgerBlue": "#0163c6",
        // "goldenYellow": "#f1b813",
        // "skyBlue": "#00aaff",
        "brightBlue": "#0180FF",
        // "brightGold": "#efd01b",
        "aliceBlue": "#f9fbfd",
        "charcoalBlack": "#131919"
      }
    },
  },
  plugins: [],
}
