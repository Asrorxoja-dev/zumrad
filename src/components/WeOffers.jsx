import offer from '../assets/offer.png'
import { IoLocationOutline } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { FcStatistics } from "react-icons/fc";
import { MdOutlineEqualizer } from "react-icons/md";
import { HiMiniShieldCheck } from "react-icons/hi2";

function WeOffers() {
  return (
    <div id='offer' className='offer  mt-20 pl-4  lg:pl-0 mb-10'>
    <h2 className='text-2xl lg:text-4xl text-blue-900 font-bold mt-10  mb-10'>Bizning takliflar</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 '>
            <div>
                <img className='w-full max-w-[340px] lg:max-w-xl pl-4  lg:pl-0 ' src={offer} alt="course" />
            </div>
        <div className='offers  ml-10 text-xl lg:text-4xl font-bold '>
        <h2 className='mt-5  lg:mt-0  mr-10 text-lg lg:text-3xl font-bold w-[300px] lg:w-[500px]'><span className='bg-blue-900 px-5 text-white p-1 rounded-lg'> ZUMRAD  ACADEMY</span>   yagona bolalar rivojlanishiga ixtisoslashtirilgan ta’lim maskani.</h2>
       <div className='flex items-center mt-10 lg:mt-20 mb-10'>
       <IoLocationOutline className='text-slate-700 bg-slate-200 w-10 h-10 p-1.5 rounded-full mr-5' />
       <h2 className=' text-slate-700'>  Qulay joylashuv </h2>
       </div>
       <div className='flex items-center mb-10'>
      <GiTeacher className='text-slate-700 bg-slate-200 w-10 h-10 p-1.5 rounded-full mr-5' />
       <h2 className=' text-slate-700'> Malakali ustozlar </h2>
       </div>
       <div className='flex items-center mb-10'>
     <MdOutlineEqualizer className='text-slate-700 bg-slate-200 w-10 h-10 p-1.5 rounded-full mr-5' />
       <h2 className=' text-slate-700'>  Zamonaviy yondashuv </h2>
       </div>
       <div className='flex items-center mb-10'>
       <HiMiniShieldCheck className='text-slate-700 bg-slate-200 w-10 h-10 p-1.5 rounded-full mr-5' />
       <h2 className=' text-slate-700'>  Sifatli talim </h2>
       </div>
       
   
        </div>
        </div>
       
    </div>
  )
}

export default WeOffers