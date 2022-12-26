import {Route, Routes} from "react-router-dom";
import LoginPage from "./scenes/loginPage";
import HomePage from "./scenes/homePage";
import ProfilePage from "./scenes/profilePage";
import {useSelector} from "react-redux";
import {useMemo} from "react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {themeSettings} from "./theme";


function App() {
    const mode = useSelector(state => state.mode)

    const theme = useMemo(()=> {
       return  createTheme(themeSettings(mode))
    }, [mode])

  return (
    <div className="app">
        <ThemeProvider theme={theme}>
            <CssBaseline/>
      <Routes>
        <Route path={'/'} element={<LoginPage/>}/>
        <Route path={'/home'} element={<HomePage/>}/>
        <Route path={'/profile/:userId'} element={<ProfilePage/>}/>
      </Routes>
        </ThemeProvider>
    </div>
  );
}

export default App;
