import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Moment from 'react-moment'
import NewsLetter from '../Home/utils/newsLetter'
import {getPostById,clearPostById} from '../../store/actions'
import { showToast } from '../Home/utils/toast'

const PostComponent = (props) => {
    
    const post=useSelector(state=>state.posts)
    
    const dispatch=useDispatch()
    
    useEffect(()=>{
        if(post.postById==='404'){
            showToast('ERROR','Page Not Found')
            props.history.push('/')
        }
    },[post,props.history])

    useEffect(() => {
        dispatch(getPostById(props.match.params.id))
    }, [dispatch,props.match.params.id])
    
    useEffect(()=>{
        return()=>{
        dispatch(clearPostById())
        }
    },[dispatch])
    
    return (
        <>
           {post.postById?
            <div className="article_container">
                <h1>{post.postById.title}</h1>
                <div style={{background:`url(${post.postById.imagexl})`}}
                 alt="" className="image">
                </div>
                <div className="author">
                    <span>{post.postById.author}- </span>
                    <Moment format="DD MMMM">
                        {post.postById.createdAt}
                    </Moment>
                </div>
                <div className="m-3 content">
                    <div dangerouslySetInnerHTML={
                        {__html:post.postById.content}
                    }></div>
                </div>
            </div>
            :null} 
        <NewsLetter/>
        </>
    )
}

export default PostComponent
