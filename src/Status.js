import React ,{useState} from 'react';
import {Avatar} from '@material-ui/core';
import './status.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
function Status() {

    const [input ,setInput] = useState('');
    const [imageUrl , setImgUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        setInput("");
        setImgUrl("");
    }
    return (
        <div className="status">
            <div className="status__top">
                <Avatar/>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="What's on your mind ?"/>
                    <input value={imageUrl} onChange={(e) => setImgUrl(e.target.value)} type="text" placeholder="image url (Optional)"/>
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>

            <div className="status__bottom">
                <div className="status__option">
                    <VideocamIcon style={{ color:"red"}}/>
                    <h4>Live Video</h4>
                </div>

                <div className="status__option">
                    <PhotoLibraryIcon style={{ color:"green"}}/>
                    <h4>Photo/Video</h4>
                </div>

                <div className="status__option">
                    <InsertEmoticonIcon style={{ color:"yellow"}}/>
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    )
}

export default Status
