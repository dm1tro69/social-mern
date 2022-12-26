import {Route, Routes} from "react-router-dom";
import LoginPage from "./scenes/loginPage";
import HomePage from "./scenes/homePage";
import ProfilePage from "./scenes/profilePage";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import authReducer from './state/index'


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={'/'} element={<LoginPage/>}/>
        <Route path={'/home'} element={<HomePage/>}/>
        <Route path={'/profile/:userId'} element={<ProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
