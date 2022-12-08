import {BiMessage} from 'react-icons/bi'
import { AiOutlineStar } from 'react-icons/ai'
import { BsArrowLeftShort, BsCalendarDate, BsCameraVideo, BsEnvelope, BsStar, BsTelephone, BsThreeDotsVertical } from 'react-icons/bs'
import { MdOutlineLabel } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useGetOneConactQuery } from '../store/service/Endpoints/AuthEndpoint'
import Loader from '../model/Loader'

const Detail = () => {

    const {id} = useParams();
    const getContact = useGetOneConactQuery(id)
    const [contact,setContact] = useState({})

    useEffect(() => {
        if (getContact.isSuccess) {
         setContact(getContact.data.contact)
        }
    },[getContact])



  const show = useSelector(state => state.userAction.sidebar)

  if (getContact.isLoading) {
    return (
        <div  className={`duration-200 h-[90vh] overflow-hidden xl:fixed ${!show ? 'xl:ml-[20%] xl:w-[80%]' : 'w-[100%] ml-0'} w-full ml-0`}>
            <Loader/>
        </div>
    )
  }


  return (
            <div  className={`duration-200 h-[90vh] overflow-hidden xl:fixed ${!show ? 'xl:ml-[20%] xl:w-[80%]' : 'w-[100%] ml-0'} w-full ml-0`}>

            <div className='w-full flex lg:flex-row flex-col lg:py-[20px] lg:sticky top-0 left-0 z-[999] lg:space-y-0 space-y-[20px] relative px-[20px]'>


                <div className='lg:w-[100px]  lg:py-0 py-[10px] w-full flex justify-between itmes-center lg:absolute top-[30px] left-[20px]'>
                    <div className='flex space-x-[10px]'>
                        <NavLink to='/contacts' className=''>
                        <BsArrowLeftShort className='text-[30px]'/>
                        </NavLink>
                    </div>
                    <div className='flex items-center space-x-[30px] lg:hidden'>
                        <AiOutlineStar className='text-[19px] text-gray-500'/>
                        <BsThreeDotsVertical className='text-[17px] text-gray-500'/>
                    </div>
                </div>

                <div className='w-full flex lg:flex-row flex-col items-center lg:space-x-[40px] lg:pl-[80px]'>
                    {
                        contact?.contactPhoto === 'http://go.contact.mmeducare.com/storage' ?
                        <div className='lg:w-[160px] lg:h-[160px] sm:w-[30%] w-[50%] rounded-full toCenter text-[40px] font-bold bg-gray-500 text-white'>{contact.fullName[0]}</div>
                        :
                         <img src={contact.contactPhoto} className='w-[160px] h-[160px] object-cover rounded-full'/>
                    }
                    <div className=' lg:w-auto w-full'>
                        <h1 className='text-center text-[30px] font-robot font-light'>{contact.fullName}</h1>
                       <div className='flex w-full'>
                        <div className='shadow h-[35px] w-[35px] rounded-full toCenter border'>
                                <MdOutlineLabel className='text-[20px] text-primary'/>
                            </div>
                       </div>
                    </div>
                </div>

                <div className='w-full justify-end items-end pr-[80px] lg:flex hidden'>
                    <div className='flex items-center space-x-[30px]'>
                        <AiOutlineStar className='text-[19px] text-gray-500'/>
                        <BsThreeDotsVertical className='text-[17px] text-gray-500'/>
                        <button className='btn-primary !px-[25px]'>Edit</button>
                    </div>
                </div>

            </div>

            <div className='w-full flex lg:justify-start justify-center lg:pl-[280px] space-x-[20px] relative after:top-[50%] after:translate-y-[-50%] after:left-0 after:absolute after:w-full after:h-[0.2px] after:bg-gray-200 after:z-[-1] z-[3] px-[20px]'>
                <div className='shadow h-[35px] w-[35px] rounded-full toCenter border bg-white'>
                    <BsEnvelope className='text-[17px] text-gray-400'/>
                </div>
                <div className='shadow h-[35px] w-[35px] rounded-full toCenter border bg-white'>
                    <BsCalendarDate className='text-[17px] text-gray-400'/>
                </div>
                <div className='shadow h-[35px] w-[35px] rounded-full toCenter border bg-white'>
                    <BiMessage className='text-[17px] text-gray-400'/>
                </div>
                <div className='shadow h-[35px] w-[35px] rounded-full toCenter border bg-white'>
                    <BsCameraVideo className='text-[17px] text-gray-400'/>
                </div>
            </div>

            <div className='w-full lg:pl-[80px] mt-[30px] flex lg:justify-start justify-center'>
                <div className='lg:w-[60%] sm:w-[85%] w-[95%] border rounded-[10px] px-[20px] py-[15px] space-y-[5px]'>
                    <h1 className='text-[17px] tracking-wide'>Contact details</h1>
                    <div className='space-y-[12px]'>
                        <div className='flex items-center space-x-[15px]'><BsEnvelope className='text-gray-500 text-[18px]'/> <a href={`mailto:${contact.email}`} target="_blank" className='text-primary font-robot text-[14px]'>{contact.email}</a></div>
                        <div className='flex items-center space-x-[15px]'><BsTelephone className='text-gray-500 text-[18px]'/> <a href={`tel:${contact.phone}`} className='text-primary font-robot text-[14px]'>{contact.phone} <span className='text-[12px] pl-[5px] text-gray-400'>• Mobile</span></a></div>
                    </div>
                </div>
            </div>

            </div>
  )
}

export default Detail