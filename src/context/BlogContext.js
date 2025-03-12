import React, { useState } from 'react';
import createDataContext from './createDataContext';
const BlogReducer = (state,action) => {
        
    switch(action.type){
        case 'add_blogpost':
            return [...state, 
                {title: action.payload.title,
                 content: action.payload.content,
                key: Math.floor(Math.random() * 99999)
            }];
        case 'delete_blogpost':
            return state.filter(BlogPost => BlogPost.key !== action.payload)
        case 'edit_blogpost':
            return state.map(item => 
                item.key === action.payload.id ? action.payload  : item )
        default:
            return state;
    }
}


    const addBlogPost = dispatch => {
        return (title, content,callback) => {
            dispatch({ type: 'add_blogpost',payload: { title, content}});
            callback();
        }
    }

    const deleteBlogPost = dispatch => {
        return (id) => {
            dispatch({ type: 'delete_blogpost', payload: id});
        }
    }

    const editBlogPost = dispatch => {
        return (id, title, content, callback) => {
            dispatch({ type: 'edit_blogpost', payload: {id, title, content}});
            callback();
        }
    } 


export const {Context, Provider} = createDataContext(BlogReducer, {addBlogPost, deleteBlogPost, editBlogPost} , 
    [{title: 'new blog', content: 'here is the content', key: 1}]);