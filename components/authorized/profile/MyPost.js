import React from 'react';
import Post from '../post/Post';

export default function MyPost(props) {
    return (
        <Post image={props.route.params.image} profile={props.route.params.profile} username={props.route.params.username}/>
    )
}