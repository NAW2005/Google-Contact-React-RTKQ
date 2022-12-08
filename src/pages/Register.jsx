import { useEffect, useRef, useState } from "react"
import {BsPersonFill} from 'react-icons/bs'
import {CiCamera} from 'react-icons/ci'
import { NavLink, useNavigate } from "react-router-dom"
import Input from "../model/Input"
import logo from "../assets/images/logo.svg"
import { useRegisterMutation } from "../store/service/Endpoints/AuthEndpoint"
import { useDispatch } from "react-redux"
import { loginReducer } from "../store/Slicer/auth/AuthSlicer"
import Loader from "../model/Loader"

const Register = () => {

    const [showPass,setShowPass] = useState(false);
    const form = useRef();
    const nav = useNavigate()
    const [register,res] = useRegisterMutation()
    const dispatch = useDispatch()

  

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const object = Object.fromEntries(formData);

        register(object)
    }    

    useEffect(() => {
        if (res.isSuccess) {
            dispatch(loginReducer({token:res.data.token,user:res.data.auth}))
            nav("/contacts")
        }
        console.log(res)
    },[res])

    if (res.isLoading) {
        return <Loader/>
    }

  return (
    
    <div className='min-h-[100vh] toCenter'>

        <div className='registerContainer '>

            <div className='md:w-[50%] sm:w-[60%] sm:py-0 py-[20px] w-full space-y-[25px]'>
                <div className='space-y-[10px]'>
                    <img src={logo} />
                    <h1 className='text-[24px]'>Create your Google Contact</h1>
                </div>
                <form className='w-full space-y-[25px]' ref={form}>
                    <Input type='text' name='name'>Username</Input>
                    <Input type='email' name='email'>Email Address</Input>
                    <div className='flex space-x-[10px]'>
                        <Input type={showPass ? 'text' : 'password'} name='password'>Password</Input>
                        <Input type={showPass ? 'text' : 'password'} name='password_confirmation'>Cofirm Password</Input>
                    </div>
                </form>
                <div className="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-900" onClick={() => setShowPass(!showPass)} />
                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium cursor-pointer">Show Password</label>
                </div>
                <div className='flex justify-between items-center'>
                    <NavLink to='/' className='navlink-primary'>Sign in instead</NavLink>
                    <button className='btn-primary' onClick={handleSubmit}>Submit</button>
                </div>
            </div>

            <div className="md:w-[50%] sm:w-[40%] w-full">
                <h1 className="text-center py-[20px]">Choose Profile Picture</h1>
                <div className=" toCenter md:!justify-center sm:!justify-end justify-center">
                    <div className="rounded-full w-[200px] h-[200px] cursor-pointer bg-[#E5E5E5] toCenter relative">
                        <BsPersonFill className="text-[150px] text-white"/>
                        <div className="w-[50px] h-[50px] bg-black bg-opacity-[0.5] rounded-full toCenter layOutCenter">
                        <CiCamera className="text-[25px] text-white rounded-full"/>
                        </div>
                    </div>
                </div>
               
            </div>

        </div>

    </div>

  )
}

export default Register