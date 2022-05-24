import React from 'react';
import './App.css';
import {Profile} from './components/Profile/Profile';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs}  from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { MyPostsPropsType} from "./index";
import {DialosPropsType} from "./index";
import {MessagesPropsType} from "./index";

export type AppPropsType = MyPostsPropsType & DialosPropsType & MessagesPropsType

function App (props:AppPropsType) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Header />
        <Navbar />

        <div className="app-wrapper-content">

          <Route exact path='/dialogs' render= {()=><Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
          <Route path='/profile' render= {()=><Profile posts={props.posts}/>} />
          <Route path='/news' render= {()=><News/>} />
          <Route path='/music' render= {()=><Music/>} />
          <Route path='/settings' render= {()=><Settings/>} />

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
