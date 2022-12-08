import React, { useEffect, useRef, useState } from 'react'
import { BsX } from 'react-icons/bs'
import { CiCamera } from 'react-icons/ci'
import { MdOutlineLabel } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import CreateForm from '../components/create/CreateForm'
import { useAddContactMutation } from '../store/service/Endpoints/AuthEndpoint'
import Lottie from 'lottie-react'
import load from '../assets/animation/btn-loader.json'

const CreateContact = () => {

  const show = useSelector(state => state.userAction.sidebar)
  const [img,setImg] = useState('https://ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png')
  const imgSelector = useRef()
  const form = useRef()
  const nav = useNavigate()
  const [addContact,res] = useAddContactMutation()

  useEffect(() => {
    if (res.isSuccess) {
      nav("/contacts")
    }
  },[res])

  const handleSelectImage = (e) => {
    const file = imgSelector.current.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (event) => {
        setImg(event.target.result)
    }
  }

  const handleSave = () => {
    const formData = new FormData()

    formData.append('firstName',form.current[0].value)
    formData.append('secondName',form.current[1].value)
    formData.append('email',form.current[2].value)
    formData.append('phone',form.current[3].value)
    formData.append('contactPhoto',imgSelector.current.files[0])

    addContact(formData)
  }
    


  return (
    <div  className={`duration-200 h-[90vh] overflow-scroll xl:fixed ${!show ? 'xl:ml-[20%] xl:w-[80%]' : 'w-[100%] ml-0'} w-full ml-0 px-[20px] overflow-scroll`}>

            <div className='w-full flex lg:flex-row flex-col py-[30px] lg:border-b lg:sticky top-0 left-0 bg-white z-[999] lg:space-y-0 space-y-[20px]'>

            
                <div className='lg:w-[100px] lg:border-none border-b lg:py-0 py-[10px] w-full flex itmes-center justify-between'>
                    <div className='flex space-x-[10px]'>
                      <NavLink to='/contacts' className=''>
                      <BsX className='text-[25px]'/>
                      </NavLink>
                      <span className='lg:hidden'>Create Contact</span>
                    </div>
                     <button className={`btn-primary lg:hidden flex justify-center items-center ${res.isLoading && '!bg-[#DFEDFE] px-[25px] !text-black !py-0'}`} onClick={handleSave}>
                      <span>{res.isLoading ? 'Saving' : "Save"}</span>
                      <Lottie animationData={load} autoPlay={true} loop={true} className={`w-[40px] ${!res.isLoading && 'hidden'}`} />
                    </button>
                </div>

                <div className='lg:w-fit w-full flex lg:justify-start justify-center space-x-[35px]'>
                    <input type="file" className='hidden' ref={imgSelector} onChange={handleSelectImage} />
                    <div className='w-[150px] h-[150px] relative' onClick={() => imgSelector.current.click()}>
                        <img className='rounded-full w-full h-full object-cover origin-top' src={img} alt="" />
                        <div className="w-[50px] h-[50px] bg-gray-800 bg-opacity-[0.5] rounded-full toCenter layOutCenter">
                                <CiCamera className="text-[30px] text-white rounded-full"/>
                        </div>
                    </div>
                    <div className='toCenter'>
                        <div className='shadow h-[35px] w-[35px] rounded-full toCenter border'>
                            <MdOutlineLabel className='text-[20px] text-primary'/>
                        </div>
                    </div>
                </div>
                
                <div className='flex items-end justify-end pr-[15%] w-full'>
                    <button className={`btn-primary lg:flex hidden justify-center items-center ${res.isLoading && '!bg-[#DFEDFE] px-[25px] !text-black !py-0'}`} onClick={handleSave}>
                      <span>{res.isLoading ? 'Saving' : "Save"}</span>
                      <Lottie animationData={load} autoPlay={true} loop={true} className={`w-[40px] ${!res.isLoading && 'hidden'}`} />
                    </button>
                </div>   

            </div>

            <form ref={form} action="" className='lg:py-[40px] pb-[40px] space-y-[30px] w-full flex flex-col lg:items-start items-center'>
             <CreateForm/>
            </form>
    </div>
  )
}

export default CreateContact