import {useNavigate} from 'react-router-dom'
import {VscMenu} from 'react-icons/vsc'
import {TbGridDots} from 'react-icons/tb'
import {AiOutlineQuestionCircle, AiOutlineSearch, AiOutlineSetting} from 'react-icons/ai'
import {BsX} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../../store/Slicer/useraction/UserActionSlicer'
import { logoutReducer, putSearch } from '../../store/Slicer/auth/AuthSlicer'


const Navbar = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const info = useSelector(state => state.authed);
 
    const handleSubmit = (e) => {
        dispatch(putSearch(e.target.value));
    }

    const handleLogOut = () => {
      dispatch(logoutReducer())
      nav('/')
    }

  
  return (
    <div className='w-full py-[10px] sticky top-0 left-0 flex bg-white'>
        <div className='w-[20%] flex items-center space-x-[20px] pl-[25px]'>
            <span className='z-[999]' onClick={() => dispatch(toggle())}>
              <VscMenu className='text-[20px] cursor-pointer'/>
            </span>
            <img className='w-[40px] md:block hidden' src="https://www.gstatic.com/images/branding/product/1x/contacts_2022_48dp.png" alt="" />
            <h1 className='text-[22px] tracking-wide text-gray-600'>Contacts</h1>
        </div>
        <div className='w-[80%] flex items-center justify-between pl-[25px] sm:space-x-0 space-x-[20px]'>
            <div className='sm:bg-[#F1F3F4] w-[65%] @:hover:bg-red-500 flex items-center sm:justify-start justify-end pl-[20px] rounded-[10px] relative'>
                <AiOutlineSearch className='sm:text-[25px] text-[22px] text-gray-500'/>
                <input type="text" className='py-[12px] px-[20px] w-full bg-transparent outline-none placeholder:text-[17px] sm:block hidden' placeholder='Search' onChange={handleSubmit} />
                <BsX className={`text-gray-500 text-end text-[35px] mr-[20px] cursor-pointer absolute top-[50%] translate-y-[-50%] right-0`}/>
            </div>
            <div className='flex sm:space-x-[60px] items-center pr-[20px] text-gray-600'>
                <div className='flex items-center text-[19px] space-x-[25px]'>
                  <AiOutlineQuestionCircle/>
                  <AiOutlineSetting/>
                </div>
                <div className='flex items-center text-[23px] space-x-[15px]'>
                  <TbGridDots className='sm:block hidden'/>
                  <div onClick={handleLogOut} className='w-[32px] h-[32px] overflow-hidden rounded-full hover:ring-4 hover:ring-gray-200 focus:ring-4 focus:ring-gray-300 ring-opacity-[0.6] cursor-pointer'>
                    {
                      info?.user?.userPhoto === null || 'http://go.contact.mmeducare.com/storage' ? <div className='w-full h-full bg-green-700 text-white font-bold toCenter'>{info?.user?.name[0]}</div> :
                      <img className='w-full h-full object-cover ' src="https://img.freepik.com/premium-photo/image-young-asian-man-posing-background_296537-7145.jpg?size=626&ext=jpg&ga=GA1.2.1174692878.1668495893&semt=sph" alt="" />
                    }
                  </div>
                </div>
            </div>
        </div>
    </div> 
 )
}

export default Navbar