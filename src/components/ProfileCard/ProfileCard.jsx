import React from 'react';
import ProfileImg from '../../img/profile.png';
import Back from '../../img/back.png'
import './ProfileCard.css'
const ProfileCard =()=>{
    return (
        <div className='ProfileCard'>
            <div className='ProfileImage'>
             <img src={Back} alt=''/>
             <img src={ProfileImg} alt=''/>
            </div>
            <div className='ProfileName'>
            <span>Shubham Kumar</span>
             <span>Web Developer</span>
            </div>

            <div className='status'>
                <hr/>
                <div>
                    <div className='follow'>
                        <span>5000</span>
                        <span>Following</span>
                    </div>
                    <div className='vl'></div>
                    <div className='follow'>
                        <span>10</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr/>
            </div>
            <span> My Profile</span>
            
        </div>
    )
}
export default ProfileCard;