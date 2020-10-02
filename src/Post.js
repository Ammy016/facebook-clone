import { Avatar } from '@material-ui/core';
import React from 'react';
import './post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import post from "./assets/post.jpg"

function Post({profilePic,image,username ,timestamp,message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt=""/>
            </div>

            <div className="Post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <h4>Like</h4>
                </div>

                <div className="post__option">
                    <CommentIcon />
                    <h4>Comment</h4>
                </div>
           
                <div className="post__option">
                    <ShareIcon />
                    <h4>Share</h4>
                </div>
            </div>
        </div>
    )
}

export default Post
