'use client'


import { useState } from 'react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';


const useGetPosts = () => {
  // Retrieve Supabase client and user from context
  const supabase = useSupabaseClient();
  const user = useUser();

  // Initialize posts state
  const [posts, setPosts] = useState([]);

  // Retrieve posts from the database
  const getPosts = async (limit) => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .limit(limit || 50);
    if (error) throw error;
    setPosts(data || []);
  };

  // Create a new post in the database
  const createPost = async (title, body) => {
    if (!user) throw new Error('User not found');
    const { data, error } = await supabase
      .from('posts')
      .insert({
        title,
        body,
        author: user.id,
      })
      .select()
      .single();
    if (error) throw error;
    return data;
  };
    
    
  // Update an existing post in the database
  const updatePost = async (id, title, body) => {
    const { data, error } = await supabase
      .from('posts')
      .update({
        title,
        body,
      })
      .match({ id })
      .select()
      .single();
    if (error) throw error;
    return data;
  };

  return {
    getPosts,
    updatePost,
    createPost,
    posts,
  };
};

export default useGetPosts;