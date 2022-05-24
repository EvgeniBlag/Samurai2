import React from 'react';
import './App.css';
import {Profile} from './components/Profile/Profile';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs}  from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { StateType} from "./redux/state";


export type AppPropsType = {
  state: StateType
}

function App (props:AppPropsType) {

  return (

      <div className="app-wrapper">

        <Header />
        <Navbar />

        <div className="app-wrapper-content">

          <Route exact path='/dialogs' render= {()=><Dialogs dialogs={props.state.dialogs} messages={props.state.messages}/>} />
          <Route path='/profile' render= {()=><Profile posts={props.state.posts}/>} />
          <Route path='/news' render= {()=><News/>} />
          <Route path='/music' render= {()=><Music/>} />
          <Route path='/settings' render= {()=><Settings/>} />

        </div>

      </div>
 
  );
}

export default App;
