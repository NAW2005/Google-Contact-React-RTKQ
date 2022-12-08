import { BsPerson, BsX } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { toggle } from "../../store/Slicer/useraction/UserActionSlicer"

const Siderbar = () => {

  const show = useSelector(state => state.userAction.sidebar)
  const dispatch = useDispatch()

  return (
    <div className={`h-[100vh] xl:w-[20%] w-auto xl:px-0 pr-[80px] bg-white duration-200 fixed  ${show ? 'xl:left-[-100%] left-0 ' : 'xl:left-0 left-[-100%]'} xl:top-auto top-0 xl:shadow-none shadow-md  pt-[20px] space-y-[25px]`}>

          <div className="w-full relative" onClick={() => dispatch(toggle())}>
          <BsX className='text-[35px] xl:hidden absolute top-0 right-[-60px]' />
          </div>

            <NavLink to='/contacts/create' className='px-[20px] text-[14px] tracking-wide shadow py-[7px] rounded-full bg-white flex items-center space-x-[10px] hover:bg-blue-400 hover:bg-opacity-[0.1] hover:shadow-lg duration-[0.3s]  ml-[15px] w-fit'>
               <svg width="36" height="36" viewBox="0 0 36 36"><path fill="#34A853" d="M16 16v14h4V20z"></path><path fill="#4285F4" d="M30 16H20l-4 4h14z"></path><path fill="#FBBC05" d="M6 16v4h10l4-4z"></path><path fill="#EA4335" d="M20 16V6h-4v14z"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
               <span> Create contact</span>
            </NavLink>
            <ul className="">
                <li className="cursor-pointer flex items-center font-medium text-[15px] space-x-[20px] bg-blue-400 bg-opacity-[0.2] text-primary pl-[30px] py-[10px] rounded-tl-none rounded-bl-none rounded-full"><BsPerson className="text-[20px]"/><span>Contacts</span></li>
            </ul>
    </div>
  )
}

export default Siderbar