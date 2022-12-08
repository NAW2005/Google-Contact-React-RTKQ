import React, { useEffect, useRef, useState } from 'react'
import { BsX } from 'react-icons/bs'
import { CiCamera } from 'react-icons/ci'
import { MdOutlineLabel } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useEditContactMutation, useGetOneConactQuery } from '../store/service/Endpoints/AuthEndpoint'
import Lottie from 'lottie-react'
import load from '../assets/animation/btn-loader.json'
import EditForm from '../components/edit/EditForm'
import Loader from '../model/Loader'

const Edit = () => {

  const show = useSelector(state => state.userAction.sidebar)
  const form = useRef()
  const [edit,res] = useEditContactMutation()
  const [data,setData] = useState({});
  const {id} = useParams()
  const getContact = useGetOneConactQuery(id)
  const nav = useNavigate()


  useEffect(() => {
    if (getContact.isSuccess) {
        setData(getContact.data.contact)
    }
  },[getContact]);

  useEffect(() => {
    if (res.isSuccess) {
      nav('/contacts')
    }
  },[res])


  const handleSave = () => { 
    edit({id,data:{
        'firstName' : form.current[0].value,
        'secondName' : form.current[1].value,
        'email' : form.current[2].value,
        'phone' : form.current[3].value,
    }})
  }

  if (getContact.isLoading) {
    return <div className={`duration-200 h-[90vh] overflow-scroll xl:fixed ${!show ? 'xl:ml-[20%] xl:w-[80%]' : 'w-[100%] ml-0'} w-full ml-0 px-[20px] overflow-scroll`}>
        <Loader/>
     </div>
  }
    

  return (
    <div className={`duration-200 h-[90vh] overflow-scroll xl:fixed ${!show ? 'xl:ml-[20%] xl:w-[80%]' : 'w-[100%] ml-0'} w-full ml-0 px-[20px] overflow-scroll`}>

            <div className='w-full flex lg:flex-row flex-col py-[30px] lg:border-b lg:sticky top-0 left-0 bg-white z-[999] lg:space-y-0 space-y-[20px]'>

            
                <div className='lg:w-[100px] lg:border-none border-b lg:py-0 py-[10px] w-full flex itmes-center justify-between'>
                    <div className='flex space-x-[10px]'>
                      <NavLink to='/contacts' className=''>
                      <BsX className='text-[25px]'/>
                      </NavLink>
                      <span className='lg:hidden'>Create Contact</span>
                    </div>
                    <button className='btn-primary !px-[25px] lg:hidden' onClick={handleSave}>
                      Save
                    </button>
                </div>

                <div className='lg:w-fit w-full flex lg:justify-start justify-center space-x-[35px]'>
                    <input type="file" className='hidden'/>
                    <div className='w-[150px] h-[150px] relative'>
                        <img className='rounded-full w-full h-full object-cover origin-top' src={getContact.data.contact.contactPhoto} alt="" />
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
             <EditForm data={data}/>
            </form>
    </div>
  )
}

export default Edit