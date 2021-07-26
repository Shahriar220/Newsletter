import * as api from '../../api'
import {
    GET_POSTS,
    ADD_NEWSLETTER,
    GET_POST_BY_ID,
    CLEAR_ID,
    CLEAR_NEWSLETTER
} from '../types'
export const getPosts=(homePost,page,order,limit)=>({
    type:GET_POSTS,
    payload:api.getPosts(homePost,page,order,limit)
})

export const getPostById=(id)=>({
    type:GET_POST_BY_ID,
    payload:api.getPostById(id)
})

export const clearPostById=()=>({
    type:CLEAR_ID,
    payload:{}
})

export const addNewsletter=(data)=>({
    type:ADD_NEWSLETTER,
    payload:api.addNewsletter(data)
})

export const clearNewsletter=()=>({
    type:CLEAR_NEWSLETTER,
    payload:{
        newsletter:false,
        email:[]
    }
})