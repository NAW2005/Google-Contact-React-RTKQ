import { useEffect, useState } from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import ContactRow from '../components/ShowContact/ContactRow'
import Loader from '../model/Loader'
import { useGetContactQuery, useLazySearchContactQuery } from '../store/service/Endpoints/AuthEndpoint'

const ShowContact = () => {

  const data = useSelector(state => state.authed)
  const getContact = useGetContactQuery();
  const [contact,setContact] = useState();
  const [searchApi,searchResult,last] = useLazySearchContactQuery()
  const search = useSelector(state => state.authed.search)

  useEffect(() => {
    if (!search.length == 0) {
      searchApi(search)
    }else{
      if (getContact.isSuccess) {
      setContact(getContact?.currentData.data)
      }
    }
  },[search])

  useEffect(() => {
    if (searchResult.isSuccess && !search.length == 0) {
      setContact(searchResult?.data?.data)
    }
  },[searchResult])

  useEffect(() => {
    if (getContact.isSuccess) {
      setContact(getContact?.currentData.data)
    }
  },[getContact])

  const navItems = [
    'Phone number','Job title & company'
  ]
  
  const show = useSelector(state => state.userAction.sidebar)
  
  return (
    <div className={`duration-200 overflow-auto xl:fixed ${!show ? 'xl:ml-[20%] xl:w-[80%]' : 'w-[100%] ml-0'} w-full ml-0 px-[20px]`}>

      <div className='row-container'>

        <div className='lg:w-[20%] sm:w-[35%] w-[70%]'>
          <h1>Name</h1>
        </div>

        <div className='lg:w-[20%] w-[35%] sm:block hidden'>
          <h1>Email</h1>
        </div>

        {
          navItems.map((i,index) => (
            <div key={index} className={`normal-row`}>
               <h1>{i}</h1>
            </div>
          ))
        }   

          <div className='lg:w-[20%] md:w-[10%] w-[30%]'>
               <h1><BsThreeDotsVertical className='text-[20px] ml-auto'/></h1>
          </div>     
      </div>

      <p className='text-[11px] font-robot font-bold text-gray-500 tracking-widest p-[10px]'>CONTACTS (19)</p>

        {
          getContact.isLoading || searchResult.status === 'pending' ?
          <Loader/>
            :
          contact?.length !== 0 ? <ContactRow data={contact} /> : <h1>No Contact</h1>
        }

    </div>
  )
}

export default ShowContact