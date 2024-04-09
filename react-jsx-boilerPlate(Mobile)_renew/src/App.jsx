import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/globalStyle'
import { theme } from "./style/theme.js";
import Router from './router';

// 레이아웃 네브바 푸터
const Layout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
              
              <Router />
              
        </ThemeProvider>
    </>
  )
}

export default App
