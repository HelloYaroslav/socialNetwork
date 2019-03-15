import React from 'react';
import './App.css';
import ProfilePage from "./Components/Profile/ProfilePage";
import DialogPage from "./Components/Dialogs/DialogPage";
import {BrowserRouter, Route} from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import NewsPage from "./Components/News/NewsPage";
import MusicPage from "./Components/Music/MusicPage";
import SettingsPage from "./Components/Settings/SettingsPage";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import CatalogPageContainer from "./Components/Dialogs/DialogPageContaier";
import ProfilePageContainer from "./Components/Profile/ProfilePageContaier";
import FriendsContainer from "./Components/Friends/FriendsContainer";


const App = (props) => {

    return (

        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className='content-wrapper'>
                    <SideBar/>
                    <Route exact path='/' component={ProfilePageContainer}/>
                    <Route path='/dialogs' component={CatalogPageContainer}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                    <Route path='/news' render={() => <NewsPage/>}/>
                    <Route path='/music' render={() => <MusicPage/>}/>
                    <Route path='/settings' render={() => <SettingsPage/>}/>
                    <Route path='/friends' render={() => <FriendsContainer/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;
