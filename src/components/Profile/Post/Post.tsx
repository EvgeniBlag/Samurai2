import React from 'react';
import s from './Post.module.css'

type addMessagePropsType = {
  message:string,
  like:number
}

  const Post = (props:addMessagePropsType) =>{
  return (
    <div className={s.item}>
    <img src="https://pbs.twimg.com/media/ErEByifXEAATxzC.jpg" alt="2-d"/>
   
    {props.message}
    
    <div className={s.like}>
        <span className={s.likelike}>Like</span>
        <span>{props.like}</span>
    </div>
  </div>
  )
}

export default Post