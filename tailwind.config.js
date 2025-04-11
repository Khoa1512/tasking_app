/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./conponents/**/*.{js,jsx,ts,tsx}" ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // Font Family
      fontFamily: {
        "plus-jakarta-bold": ["PlusJakartaSans-Bold", "sans-serif"],
        "plus-jakarta-semibold": ["PlusJakartaSans-SemiBold", "sans-serif"],
        "plus-jakarta-medium": ["PlusJakartaSans-Medium", "sans-serif"],
      },
      // Font Sizes
      fontSize: {
        xs: "10px", // Xtra-Small
        sm: "12px", // Small
        md: "14px", // Medium
        lg: "16px", // Large
        xl: "18px", // Xtra-Large
        h6: "18px", // H6
        h5: "20px", // H5
        h4: "24px", // H4
        h3: "32px", // H3
        h2: "40px", // H2
        h1: "48px", // H1
      },
      // Colors
      colors: {
        // Main Colors
        primary: "#3dcab1",
        secondary: "#F6F8FE",
        // Alerts
        success: "#00C566",
        error: "#E53935",
        warning: "#FACC15",
        // Additional Colors
        white: "#FEFEFE",
        line: "#E3E7EC",
        "line-dark": "#4A4A65",
        black: "#111111",
        // Grayscale
        grayscale: {
          10: "#FDFDFD",
          20: "#ECF1F6",
          30: "#E3E9ED",
          40: "#D1D8DD",
          50: "#BFC6CC",
          60: "#9CA4AB",
          70: "#78828A",
          80: "#66707A",
          90: "#434E58",
          100: "#171725",
        },
      },
    },
  },
  plugins: [],
};
