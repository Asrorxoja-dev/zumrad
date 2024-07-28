import heroImg from '../assets/heroImg.png'
import Frame from '../assets/Frame.png'
function Hero() {
  return (
    <div>
    <div id='hero' className='mt-20 bg-blue-50 rounded-2xl px-5 lg:px-10 py-5 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='mt-0 lg:mt-20 lg:order-2  order-2 '>
            <h2 className='w-[300px] lg:w-[690px] tracking-wider text-[24px] lg:text-6xl'>
            <p className='text-blue-900 font-extrabold'>ZUMRAD ACADEMY</p>
            <p className=' w-[200px] lg:w-[600px] text-dark-900 font-bold'> 
              yagona bolalar rivojlanishiga ixtisoslashtirilgan ta’lim maskani.
             </p>
            </h2>
            <button className='btn w-32 mt-5 lg:mt-10 bg-blue-800 text-white hover:bg-blue-900'>
                Get Started
            </button>
        </div>
        <div className='ml-0 lg:ml-36 lg:order-2  order-1 hero-image' >
     <img className='w-[400px]' src={heroImg} alt="heroImg"  />

        </div>
    </div>
    
    </div>
  )
}

export default Hero