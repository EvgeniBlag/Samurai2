
import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

type DialogsPropsType ={
    name:string
    id:number
}
type MessagePropsType={
    message:string
}

const DialogItem = (props:DialogsPropsType)=>{
    let path = "/dialogs/" + props.id;
    return(
        <div className={s.dialog +' '+ s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
  }
  const Message = (props:MessagePropsType) =>{
      return(
        <div className={s.message}>{props.message}</div>
      )
  }


export const Dialogs = (props:DialogsPropsType) => {

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

    let dialogsElements = dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id} />
    })

    let messagesElement = messages.map(m => {
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

