import React from 'react'
import { Switch,Route,BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/header'
import MainLayout from './hoc/mainLayout'
import Contacts from './components/Home/contacts'
import PostComponent from './components/Posts'
const Routes = () => {
    return (
        <>
            <BrowserRouter>
            <Header/>
                <MainLayout>
                    <Switch>
                        <Route path='/article/:id' component={PostComponent}/>
                        <Route path='/contacts' component={Contacts}/>
                        <Route path='/' component={Home}/>
                    </Switch>
                </MainLayout>
            </BrowserRouter>
        </>
    )
}

export default Routes
