import React from 'react'
import { useEffect,useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Form,Button } from 'react-bootstrap'
import { addNewsletter,clearNewsletter } from '../../../store/actions'
import { showToast } from './toast'

const NewsLetter = () => {
    const userData=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const textInput=useRef()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const value=textInput.current.value
        dispatch(addNewsletter({email:value}))
    }
    useEffect(()=>{
        if(userData.newsletter){
            if(userData.newsletter==="added"){
                showToast('SUCCESS',"Thanks for subscribing")
                textInput.current.value=''
                //dispatch(clearNewsletter())
            }
            if(userData.newsletter==='failed'){
                showToast('ERROR','Already Subscribed')
                textInput.current.value=''
                //dispatch(clearNewsletter())
            }
        }
    },[userData])

    useEffect(()=>{
        return()=>{
            dispatch(clearNewsletter())
        }
    },[dispatch])
    return (
        <>
            <div className="newsletter_container">
                <h1>Join our NewsLetter</h1>
                <Form onSubmit={handleSubmit} className="mt-4">
                    <Form.Group>
                        <Form.Control
                        type="text"
                        placeholder="example.com"
                        name="email"
                        ref={textInput}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add me to the list
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default NewsLetter
