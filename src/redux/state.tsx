import React from "react";
import { rerenderEntireTree } from "../render";


export type MyPostsPropsType = {
    posts: Array<postsType>
   }
export type postsType = {
    id:number,
    message:string,
    likesCount:number
  }
  


  
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
  
export type StateType = {
    profilePage:{
        posts: Array<postsType>
    }

    dialogs: Array<itemsDialogsType>
    messages: Array<itemsMessagesPropsType>
}


export type  MessagePropsType = {
    message:string
}

export type profilePageType = {
     posts: Array<postsType>
}




const state: StateType = {
  profilePage:{
    posts: [
        { id: 1, message: "Hi its me", likesCount: 12 },
        { id: 2, message: "How is yuor it-kamasutra", likesCount: 15 },
        { id: 2, message: "How is yuor it-kamasutra", likesCount: 15 },
        { id: 2, message: "How is yuor it-kamasutra", likesCount: 15 },
        { id: 2, message: "How is yuor it-kamasutra", likesCount: 15 },
    ]
  },
    dialogs : [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Svetlana" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Victor" },
        { id: 6, name: "Valera" }
    ],
    messages : [
        { id: 1, message: "Hi its me" },
        { id: 2, message: "How is yuor it-kamasutra" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Show me the money" },
        { id: 5, message: "School of seven bels" },
        { id: 6, message: "Kiss them for me" }
    ]
}

export let addPost = (postMessage: string)=>{
    let newPost = {
        id:5,
        message:postMessage,
        likesCount:0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;