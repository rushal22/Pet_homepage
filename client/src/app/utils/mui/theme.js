import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google"

const nunitoFont = {
  fontFamily: 'Nunito , Inter',
};

export const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: 'Nunito',
h1: {
  fontWeight: 800,
  fontSize: "20px",
  lineHeight: "30px",
  "@media (min-width: 900px)": {
    fontSize: "45px",
    lineHeight: "60px",
  },
},

h2: {
  fontWeight: 900,
  fontSize: "20px",
  lineHeight: "30px",
  "@media (min-width: 900px)": {
    fontSize: "40px",
    lineHeight: "60px",
  },
},
h3: {
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "30px",
  "@media (min-width: 900px)": {
    fontSize: "26px",
    lineHeight: "32px",
  },
},
h4: {
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "30px",
  "@media (min-width: 900px)": {
    fontSize: "22px",
    lineHeight: "32px",
  },
},
h5: {
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "30px",
  "@media (min-width: 900px)": {
    fontSize: "18px",
    lineHeight: "32px",
  },
},
h6: {
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "30px",
  "@media (min-width: 900px)": {
    fontSize: "12px",
    lineHeight: "14px",
  },
},
h7: {
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "30px",
  "@media (min-width: 900px)": {
    fontSize: "15px",
    lineHeight: "14px",
  },
},
h8: {
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "30px",
  "@media (min-width: 900px)": {
    fontSize: "16px",
    lineHeight: "14.72px",
  },
},


osct: {
  fontWeight: 800,
  fontSize: "20px",
  lineHeight: "30px",
  "@media (min-width: 900px)": {
    fontSize: "20px",
    lineHeight: "38px",
  },
},
oscd: {
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "18px",
  "@media (min-width: 900px)": {
    fontSize: "14px",
    lineHeight: "24px",
  },
},
omft: {
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "18px",
  "@media (min-width: 900px)": {
    fontSize: "20px",
    lineHeight: "32px",
  },
},

omfd: {
  fontWeight: 900,
  fontSize: "14px",
  lineHeight: "18px",
  "@media (min-width: 900px)": {
    fontSize: "34px",
    lineHeight: "32px",
  },
},

flbd: {
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "18px",
  "@media (min-width: 900px)": {
    fontSize: "18px",
    lineHeight: "30px",
  },
},

flbrt: {
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "18px",
  "@media (min-width: 900px)": {
    fontSize: "18px",
    lineHeight: "18px",
  },
},
flbrv: {
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "18px",
  "@media (min-width: 900px)": {
    fontSize: "20px",
    lineHeight: "20px",
  },
},

flbrv: {
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "18px",
  "@media (min-width: 900px)": {
    fontSize: "20px",
    lineHeight: "25px",
  },
},

ct1: {
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "17px",
},
ct2: {
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "17px",
},

ct3: {
  fontWeight: 800,
  fontSize: "16px",
  lineHeight: "24px",
},

ct4: {
  fontWeight: 800,
  fontSize: "18px",
  lineHeight: "28px",
},
cd1: {
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "24.01px",
},

cdk1: {
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "18px",
},

cdv1: {
  fontWeight: 700,
  fontSize: "12px",
  lineHeight: "18px",
},

b1: {
  fontWeight: 600,
  fontSize: "15px",
  lineHeight: "32px",
},
b2: {
  fontWeight: 600,
  fontSize: "12px",
  lineHeight: "20px",
},
},
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [nunitoFont],
      },
    },
  },
  palette: {
    custom: {
        blue: "#007FFF",
        darkblue: "#17224D",
        darkwhite: "#F5FAFA",
        lightblack: "#292929",
        grey: "#515151",
    },
},
});
