
import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem"
import {Message} from "./Message/Message"
import { itemsDialogsType, itemsMessagesPropsType } from "../../redux/state";





type MyDialogsProps = {
    dialogs:Array<itemsDialogsType>
    messages:Array<itemsMessagesPropsType>
}
 



export const Dialogs = (props:MyDialogsProps) => {



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

