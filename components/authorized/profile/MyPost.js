import React from 'react';
import { ScrollView } from 'react-native';
import Post from '../post/Post';

export default function MyPost(props) {
    return (
        <ScrollView>
        <Post image={props.route.params.image} profile={props.route.params.profile} username={props.route.params.username}/>
        </ScrollView>
    )
}