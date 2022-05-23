import React from 'react';
import s from './MyPosts.module.css'
import Post from '../Post/Post';



const MyPosts = () => {

  const posts = [
    { id: 1, message: "Hi its me", likesCount: 12 },
    { id: 2, message: "How is yuor it-kamasutra", likesCount: 15 },
    { id: 2, message: "How is yuor it-kamasutra", likesCount: 15 },
    { id: 2, message: "How is yuor it-kamasutra", likesCount: 15 },
    { id: 2, message: "How is yuor it-kamasutra", likesCount: 15 },
  ]

  let postsElement = posts.map(p => <Post message={p.message} like={p.likesCount} />)

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

          {postsElement}

          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  )
}       

export default MyPosts