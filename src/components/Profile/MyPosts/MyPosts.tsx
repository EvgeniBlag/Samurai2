import React from 'react';
import s from  './MyPosts.module.css'
import Post from '../Post/Post';



const MyPosts = () =>{

  const postData = [
    { id: 1, message: "Hi its me",likesCount:12 },
    { id: 2, message: "How is yuor it-kamasutra",likesCount:15 },
]

    return ( 
     
      <div className={s.all}>
       <h3>Ava + description</h3> 
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

           <Post message={postData[0].message} like={postData[0].likesCount} />
           <Post message={postData[1].message}like={postData[1].likesCount} />
           

            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    )
}       

export default MyPosts