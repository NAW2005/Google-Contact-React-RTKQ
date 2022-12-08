import { BsPerson, BsTelephone } from 'react-icons/bs'
import {HiOutlineEnvelope} from 'react-icons/hi2'
import InputGroup from '../create/InputGroup'

const EditForm = ({data}) => {

    console.log(data)

    const input = [
        {
            icon : <BsPerson/>,
            input : [
                {
                    name : 'firstName',
                    placeholder : "First name",
                    type : 'text',
                    value : data.firstName
                },
                {
                    name : 'secondName',
                    placeholder : "Surname",
                    type : 'text',
                    value : data.secondName
                }
            ]
        },

        {
            icon : <HiOutlineEnvelope/>,
            input : [
                {
                    type : 'email',
                    placeholder:"Email",
                    name : 'email',
                    value : data.email
                }
            ]
        },
        {
            icon : <BsTelephone/>,
            input : [
                {
                    type : 'text',
                    name : 'phone',
                    placeholder : "Phone",
                    value : data.phone
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
                                <InputGroup value={i.value} key={index} type={i.type} name={i.name}>{i.placeholder}</InputGroup>
                            ))
                        }
                    </div>
                </div>
            ))
               

   
  )
}

export default EditForm