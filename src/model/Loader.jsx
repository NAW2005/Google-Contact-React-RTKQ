import Lottie from 'lottie-react'
import loading from '../assets/animation/loader-animation.json'

const Loader = () => {
  return (
    <div className='min-h-[100vh] flex justify-center items-center'>
        <div className='w-[300px]'>
        <Lottie animationData={loading} loop={true} autoplay={true}  />
        </div>
    </div>
  )
}

export default Loader