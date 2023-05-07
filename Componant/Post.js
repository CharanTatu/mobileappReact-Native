import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(post.isLiked);

  const handleLike = async () => {
    try {
      // Update the like status on the server
      //await axios.post(`https://api.example.com/posts/${post.id}/like`, { liked: !liked });

      // Update the local state for liked status
      setLiked(!liked);
    } catch (error) {
      // Handle any errors
      console.error('Error updating post like status:', error);
    }
  };

  return (
    <View>
      <Text>{post.content}</Text>
      <Text>Author: {post.author}</Text>
      <TouchableOpacity onPress={handleLike}>
        <Icon name={liked ? 'heart' : 'heart-outline'} size={24} color="red" />
        <Text>{liked ? 'Liked' : 'Like'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Post;