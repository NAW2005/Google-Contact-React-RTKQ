import React from 'react'

const InputGroup = ({name,type,children,value}) => {
  return (
    <div className='relative'>
    <input name={name} type={type} id={children} defaultValue={value} className={`block border-b focus:border-b-2  pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer`} placeholder=" " />
    <label htmlFor={children} className="absolute text-[14.5px] text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[0.8] peer-focus:-translate-y-[13px]">{children}</label>
    </div>
  )
}

export default InputGroup