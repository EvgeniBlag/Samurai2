
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

    const dialogsData = [

        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Svetlana" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Victor" },
        { id: 6, name: "Valera" }
    
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

            <DialogItem name="Dimych" id={1}/>
            <DialogItem name="Andrey" id={2}/>
            <DialogItem name="Sveta" id={3}/>
            <DialogItem name="Sasha" id={4}/>
            <DialogItem name="Victor" id={5}/>
            <DialogItem name="Valera" id={6}/>

            </div>

            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is yuor it-kamasutra"/>
                <Message message="Yo"/>
            </div>

        </div>
    )
}

