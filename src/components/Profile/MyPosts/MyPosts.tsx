import React from 'react';
import s from './MyPosts.module.css'
import {Post} from '../Post/Post';
import { postsType } from '../../../redux/state';


type MyPostsProps = {
  posts: Array<postsType>
}


export const MyPosts = (props:MyPostsProps) => {

  let postsElement = props.posts.map(p => <Post message={p.message} like={p.likesCount} />)

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

