import { useEffect, useRef } from "react"
import { Navigate, NavLink, useNavigate } from "react-router-dom"
import logo from "../assets/images/logo.svg"
import Input from '../model/Input'
import { useDispatch, useSelector } from "react-redux"
import {  useLoginMutation } from "../store/service/Endpoints/AuthEndpoint"
import { loginReducer } from "../store/Slicer/auth/AuthSlicer"
import Loader from "../model/Loader"

const Login = () => {

    const form = useRef()
    const [login,res] = useLoginMutation()
    const nav = useNavigate()
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault()
        const formData = new FormData(form.current)
        const object = Object.fromEntries(formData);
        login(object)
    }

    useEffect(() => {
      if (res.isSuccess) {
        dispatch(loginReducer({token:res.data.token,user:res.data.auth}))
        nav("/contacts")
      }
    },[res])


    if (res.isLoading) {
      return <Loader/>
    }
  

  return (
    <div className='min-h-[100vh] toCenter'>
        
        <div className="space-y-[30px] sm:w-auto w-full sm:border px-[40px] py-[40px] rounded-md shadow-md">
            <div className="space-y-[10px]">
               <img src={logo} alt="" />
               <h1 className='text-[20px]'>Sign In to Google Contact</h1>
            </div>
            <form ref={form} className="sm:w-[290px] w-full space-y-[25px]">
              <Input type='email' name='email'>Email Address</Input>
              <Input type='password' name='password'>Your Password</Input>
              <div className="flex items-center">
                    <input id="check" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-4 border-gray-600" />
                    <label htmlFor="check" className="ml-2 text-sm font-medium text-gray-600 cursor-pointer">Accept Privacy And Policy</label>
                </div>
              <div className="flex justify-between items-center">
                <NavLink to='/register' className='navlink-primary'>Create an Account?</NavLink>
                <button onClick={handleLogin} className="btn-primary">Sign In</button>
              </div>
            </form>
        </div>
    
    </div>
  )
}

export default Login