import { BsBuilding, BsPerson, BsTelephone, BsX } from 'react-icons/bs'
import { MdOutlineCake} from 'react-icons/md'
import {HiOutlineEnvelope} from 'react-icons/hi2'
import InputGroup from './InputGroup'

const CreateForm = () => {

    const input = [
        {
            icon : <BsPerson/>,
            input : [
                {
                    name : 'firstName',
                    placeholder : "First name",
                    type : 'text'
                },
                {
                    name : 'secondName',
                    placeholder : "Surname",
                    type : 'text'
                }
            ]
        },

        {
            icon : <HiOutlineEnvelope/>,
            input : [
                {
                    type : 'email',
                    placeholder:"Email",
                    name : 'email'
                }
            ]
        },
        {
            icon : <BsTelephone/>,
            input : [
                {
                    type : 'text',
                    name : 'phone',
                    placeholder : "Phone"
                }
            ]
        },
      
      ]

  return (

    
        input.map((i,index) => (
            <div key={index} className='lg:w-[60%] w-[90%] flex space-x-[25px] lg:pl-[70px]'>
                    <div  className='text-gray-600 text-[20px] mt-[15px]'>
                        {i.icon}
                    </div>
                    <div className='w-full space-y-[5px]'>
                        {
                            i.input.map((i,index) => (
                                <InputGroup key={index} type={i.type} name={i.name}>{i.placeholder}</InputGroup>
                            ))
                        }
                    </div>
                </div>
            ))
               

   
  )
}

export default CreateForm