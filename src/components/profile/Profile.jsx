import React from 'react';
import FollowerCard from '../FollowerCard/FollowerCard';
import ProfileCard from '../ProfileCard/ProfileCard';
import './Profile.css'
const Profile = ()=>{

    return(
<div className='ProfileSide'>
   <ProfileCard/>
   <FollowerCard/>
</div>
    )
}
export default Profile;