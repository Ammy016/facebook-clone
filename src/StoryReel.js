import React from 'react'
import Story from './Story'
import './storyreel.css';
import profile from "./assets/profile.jpg"


function StoryReel() {
    return (
        <div className="storyReel">
            {/* Story */}
            <Story image="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
            profileSrc={profile}
            title="Amanjot Singh"/>
            <Story image="https://i.picsum.photos/id/155/3264/2176.jpg?hmac=Zgf_oGMJeg18XoKBFmJgp2DgHMRYuorXlDx5wLII9nU"
            profileSrc={profile}            title="Amanjot Singh"/>
            <Story image="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
            profileSrc={profile}
            title="Amanjot Singh"/>
            <Story image="https://i.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY"
            profileSrc={profile}
            title="Amanjot Singh"/>
            <Story image="https://i.picsum.photos/id/155/3264/2176.jpg?hmac=Zgf_oGMJeg18XoKBFmJgp2DgHMRYuorXlDx5wLII9nU"
            profileSrc={profile}            title="Amanjot Singh"/>
        </div>
    )
}

export default StoryReel
