const Input = ({children,type,name,check,classes}) => {
  return (
  <>
    <div className={`relative ${check && 'space-y-[10px]'}`}>
  <h1 className={`text-red-500 text-[13px] ${check ? 'block' : 'hidden'}`}>Invalid {children}</h1>
        <div className='relative'>
        <input  name={name} type={type} id={children} className={`block border px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-[3px] border-1 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer ${classes}`} placeholder=" " />
        <label htmlFor={children} className="absolute text-[15px] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[0.8] peer-focus:-translate-y-4 left-1">{children}</label>
        </div>
    </div>
  </>
  )
}

export default Input