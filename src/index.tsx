import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export type postsType = {
  id:number,
  message:string,
  likesCount:number
}

 export type MyPostsPropsType = {
 posts: Array<postsType>
}

const posts = [
  { id: 1, message: "Hi its me", likesCount: 12 },
  { id: 2, message: "How is yuor it-kamasutra", likesCount: 15 },
  { id: 2, message: "How is yuor it-kamasutra", likesCount: 15 },
  { id: 2, message: "How is yuor it-kamasutra", likesCount: 15 },
  { id: 2, message: "How is yuor it-kamasutra", likesCount: 15 },
]





export type DialosPropsType = {
 dialogs:Array<itemsDialogsType>
}

export type itemsDialogsType = {
  id:number,
  name:string
}

export type MessagesPropsType = {
  messages:Array<itemsMessagesPropsType>
}

export type itemsMessagesPropsType = {
  id:number,
  message:string
}

const dialogs = [

  { id: 1, name: "Dimych" },
  { id: 2, name: "Andrew" },
  { id: 3, name: "Svetlana" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Victor" },
  { id: 6, name: "Valera" }

]
const messages = [
  { id: 1, message: "Hi its me" },
  { id: 2, message: "How is yuor it-kamasutra" },
  { id: 3, message: "Yo" },
  { id: 4, message: "Show me the money" },
  { id: 5, message: "School of seven bels" },
  { id: 6, message: "Kiss them for me" }
]







ReactDOM.render(

    <App posts={posts} dialogs={dialogs} messages={messages}/>,

  document.getElementById('root')
);