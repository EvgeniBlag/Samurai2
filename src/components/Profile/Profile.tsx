import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { postsType } from '../../redux/state';

type ProfileProps = {
  posts: Array<postsType>
}

export const Profile = (props:ProfileProps) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts}/>
    </div>
  )

}

