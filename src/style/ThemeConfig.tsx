
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';

enum themePallete {
  BG = "#FFFFFF",
  PRIMARY = '#3A3B3C'
}
enum typography {
  FONT_GLOBAL = "'Noto Sans', sans-serif"
}
// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: themePallete.BG
    },
    primary: {
      main: themePallete.PRIMARY,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: typography.FONT_GLOBAL
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: themePallete.PRIMARY
      }
    }
  }
});

type ThemeProps = {
  children: JSX.Element
}
export function ThemeConfig({ children }: ThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
