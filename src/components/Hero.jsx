import heroImg from '../assets/heroImg.png'
import Frame from '../assets/Frame.png'
function Hero() {
  return (
    <div id='Hero'>
    <div id='hero' className='mt-20 text-center lg:text-left bg-blue-50  rounded-2xl px-5  lg:px-10 py-5 lg:py-10 grid grid-cols-1 lg:grid-cols-2 '>
        <div className='mt-0 lg:mt-20 lg:order-2  order-2 '>
            <h2 className='w-[350px] lg:w-[690px] tracking-wider text-[24px] lg:text-6xl'>
            <p className='text-blue-900 font-extrabold'>ZUMRAD ACADEMY</p>
            <p className=' w-[350px] lg:w-[600px] text-dark-900 font-bold'> 
              yagona bolalar rivojlanishiga ixtisoslashtirilgan ta’lim maskani.
             </p>
            </h2>
            <button className='btn w-32 mt-5 lg:mt-10 bg-blue-800 text-white hover:bg-blue-900'>
              Bog'lanish
            </button>
        </div>
        <div className='lg:order-2  order-1 hero-image ml-0 lg:ml-40' >
     <img className=' w-full px-3 md-h-auto rounded-b-md ' src={heroImg} alt="heroImg"  />

        </div>
    </div>
    
    </div>
  )
}

export default Hero