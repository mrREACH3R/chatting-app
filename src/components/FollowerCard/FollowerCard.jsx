import React from 'react';
import './FollowerCard.css'
import { Followers } from '../Data/FollowerData';
const FollowerCard =()=>{
    return (
        <div className='FollowerCard'>
            <h4>Who is Following You</h4>
            {Followers.map((follower,id)=>{
                return(
                    <div className='followers'>
                       <div>
                           <img src={follower.img} alt=''
                               className='followerImg'
                           />
                           <div className='name'>
                               <span>{follower.name}</span>
                               <span>@{follower.username}</span>
                           </div>
                       </div>
                       <button className='button fc-button'>Follow me</button>
                    </div>
                )
            })
            
            }
        </div>
    )
}
export default FollowerCard;