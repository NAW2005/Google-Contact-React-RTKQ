import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Route,Routes,useNavigate} from 'react-router-dom'
import Loader from './model/Loader'
import Contacts from './pages/Contacts'
import CreateContact from './pages/CreateContact'
import Detail from './pages/Detail'
import Edit from './pages/Edit'
import Login from './pages/Login'
import Register from './pages/Register'
import ShowContact from './pages/ShowContact'
import { useAuthorizeMutation } from './store/service/Endpoints/AuthEndpoint'
import { loginReducer, logoutReducer } from './store/Slicer/auth/AuthSlicer'

const App = () => {

  const [auth,isAuth] = useAuthorizeMutation()
  const nav = useNavigate()
  const dispatch = useDispatch();
  const token = useSelector(state => state.authed.token)

  useEffect(() => {
    auth()
  },[token])

  useEffect(() => {
    if (localStorage.getItem("token") && !isAuth.isError) {
        if (isAuth.isSuccess) {
          dispatch(loginReducer({token:localStorage.getItem("token"),user:isAuth.data.profile[0]}))
          nav('/contacts')
        }      
    }else{
      dispatch(logoutReducer())
      nav('/')
    }
  },[isAuth])


  if (isAuth.isLoading) {
    return <Loader/>
  }
  

  return (
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/contacts' element={<Contacts/>}>
          <Route index element={<ShowContact/>} /> 
          <Route path='create' element={<CreateContact/>} /> 
          <Route path='detail/:id' element={<Detail/>} /> 
          <Route path='edit/:id' element={<Edit/>} /> 
        </Route>
      </Routes>
  )
}

export default App