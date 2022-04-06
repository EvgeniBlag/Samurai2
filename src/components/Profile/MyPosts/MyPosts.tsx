import React from 'react';
import s from  './MyPosts.module.css'
import Post from '../Post/Post';



const MyPosts = () =>{
    return ( 
     
      <div className={s.all}>
        Ava + description
        <div>
          My posts
          <div className={s.textarea}>
          <textarea></textarea>
          <button className={s.button}>Add post</button>
          </div>
          
          <div className={s.newpost}>
            New post
          </div>
          <div className={s.posts}>

           <Post message={'Hi how are yuo?'} like={4} />
           <Post message={'Do yuo write code?'}like={15} />
           

            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    )
}       

export default MyPosts