import React, { useState } from 'react';
import createDataContext from './createDataContext';
const BlogReducer = (state,action) => {
        
    switch(action.type){
        case 'add_blogpost':
            return [...state, 
                {title: `Blog post #${state.length + 1}`,
                key: Math.floor(Math.random() * 99999)
            }];
        case 'delete_blogpost':
            return state.filter(BlogPost => BlogPost.key !== action.payload)
        default:
            return state;
    }
}


    const addBlogPost = dispatch => {
        return () => {
            dispatch({ type: 'add_blogpost'});
        }
    }

    const deleteBlogPost = dispatch => {
        return (id) => {
            dispatch({ type: 'delete_blogpost', payload: id});
        }
    }


export const {Context, Provider} = createDataContext(BlogReducer, {addBlogPost, deleteBlogPost} , []);