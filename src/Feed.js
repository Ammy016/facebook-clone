import React from 'react'
import StoryReel from './StoryReel';
import './feed.css';
import Status from './Status';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <Status/>
            <Post profilePic="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY" 
            username='Amanjot singh'
            image="https://i.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY"
            message="this is my first post"
            timestamp='this is the timestamp' />

            <Post profilePic="../assets/profile.jpg" 
            username='Amanjot singh'
            image="https://i.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY"
            message="this is my first post"
            timestamp='this is the timestamp' />

            <Post profilePic="../assets/profile.jpg" 
            username='Amanjot singh'
            image="../assets/post.jpg"
            message="this is my first post"
            timestamp='this is the timestamp' />
        </div>
    )
}

export default Feed
