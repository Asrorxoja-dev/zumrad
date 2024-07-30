import rumradImg from '../assets/zumradImg.jpg'

function Contact() {
  return (
    <div id='contact'>
            <h2>
            <p className="text-blue-900 font-bold text-2xl ml-5 lg:ml-0 lg:text-4xl mb-10 mt-10 lg:mt-20 ">Bog'lanish</p>
          </h2>
        <div className='shadow-2xl rounded-md p-5 items-center grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div>
       <figure className='rounded-md'>
        <img className='w-full max-w-xl lg:max-w-[500px] ml-0 lg:ml-10 rounded-2xl mx-auto lg:mx-0 ' src={rumradImg} alt="rumrad" />
       </figure>
            </div>
            <div>
  <form className="form-control   ml-0 lg:ml-10">
              <input type="text" placeholder="Ism" className="custom-input w-full  lg:max-w-[400px]" />
              <input type="email" placeholder="Email" className="custom-input  w-full lg:max-w-[400px] my-10" />
              <input type="tel" placeholder="Telefon raqam" className="custom-input  w-full lg:max-w-[400px] mb-10" />
              <textarea className="custom-textarea w-full  lg:max-w-[400px]" placeholder="Xabaringizni qoldiring"></textarea> 
              <button type='button' className="btn btn-primary w-full max-w-[150px] lg:max-w-[400px] mt-5">Send</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Contact