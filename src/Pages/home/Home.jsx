import React from 'react';
import './Home.css';
import Profile from '../../components/profile/Profile';
import Post from '../../components/post/Post';
const Home =()=>{
    return(
<div className='Home'>
<Post/>
<Profile/>
</div>
    )
}

export default Home;