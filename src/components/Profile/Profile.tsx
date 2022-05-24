import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import {Post} from "./Post/Post"
 import {MyPostsPropsType} from "../../index"



export const Profile = (props:MyPostsPropsType) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts}/>
    </div>
  )

}

