
import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem"
import {Message} from "./Message/Message"
import {DialosPropsType} from "./../../index"
import {MessagesPropsType} from "./../../index";


// type DialosPropsType = {
//     id:number,
//     name:string
// }

// type MessagesPropsType = {
//     id:number,
//     name:string
// }


type DialogMessagePropsType =  DialosPropsType & MessagesPropsType


export const Dialogs = (props:DialogMessagePropsType) => {

    // const dialogs = [

    //     { id: 1, name: "Dimych" },
    //     { id: 2, name: "Andrew" },
    //     { id: 3, name: "Svetlana" },
    //     { id: 4, name: "Sasha" },
    //     { id: 5, name: "Victor" },
    //     { id: 6, name: "Valera" }
    
    // ]
    // const messages = [
    //     { id: 1, message: "Hi its me" },
    //     { id: 2, message: "How is yuor it-kamasutra" },
    //     { id: 3, message: "Yo" },
    //     { id: 4, message: "Show me the money" },
    //     { id: 5, message: "School of seven bels" },
    //     { id: 6, message: "Kiss them for me" }
    // ]

    let dialogsElements = props.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id} />
    })

    let messagesElement = props.messages.map(m => {
        return <Message message={m.message} />
    })


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

               {dialogsElements}

            </div>

            <div className={s.messages}>
              {messagesElement}
            </div>

        </div>
    )
}

