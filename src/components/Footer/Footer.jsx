
const Footer = () => {
  return (
    <div>
      <section className="grid grid-cols-1 py-20 sm:grid-cols-2 md:grid-cols-3 2xl:px-[15%]  justify-between bg-black text-white p-5 flex-[5]">
        <div className="flex-[2]">
          <div className="flex items-center gap-2 ">
            <h1 className="text-3xl uppercase ler tracking-wider">Star <span className="text-sky-500 font-medium ">Creation</span></h1>
          </div>
          <p className='mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque exercitationem libero temporibus
            ut tempore minus, nisi repudiandae repellat aliquam iste quae possimus magnam enim quibusdam earum cumque
            minima consectetur.
          </p>
          <div className="icons mt-5 flex justify-between">
            <i className="fa-brands fa-facebook-f text-xl duration-200 px-3 py-1 rounded-full bg-white text-black cursor-pointer hover:bg-sky-500 hover:text-white"></i>
            <i className="fa-brands fa-instagram text-xl duration-200 px-2 py-1 rounded-full bg-white text-black cursor-pointer hover:bg-sky-500 hover:text-white"></i>
            <i className="fa-brands fa-twitter text-xl duration-200 px-2 py-1 rounded-full bg-white text-black cursor-pointer hover:bg-sky-500 hover:text-white"></i>
            <i className="fa-brands fa-github text-xl duration-200 px-2 py-1 rounded-full bg-white text-black cursor-pointer hover:bg-sky-500 hover:text-white"></i>
            <i className="fa-brands fa-linkedin text-x duration-200 px-3 py-2 rounded-full bg-white text-black cursor-pointer hover:bg-sky-500 hover:text-white"></i>
          </div>
        </div>
        <div className="sm:ml-10 text-left ">
          <h6 className="text-2xl">Our Services</h6>
          <hr className='w-3/5 my-5 mt-2' />
          <ul className="footer__services flex flex-col gap-2">
            <li className="footer__service">
              <a href="#">Company</a>
            </li>
            <li className="footer__service">
              <a href="#">Products
              </a>
            </li>
            <li className="footer__service">
              <a href="#">Offices</a>
            </li>
            <li className="footer__service">
              <a href="#">About</a>
            </li>
            <li className="footer__service">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div >
          <h6 className="text-2xl ">Contact Info</h6>
          <hr className='w-3/5 my-5 mt-2' />
          <div className=" flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <i className="fa-solid fa-phone  text-sky-500"></i>
              <div>
                <p>Phone</p>
                <a href="tel:+8801402434727">+8801402434727</a>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <i className="fa-solid fa-envelope text-sky-500"></i>
              <div>
                <p>Email</p>
                <a href="mailto:tanvir.rana.soikat@gmail.com">tanvir.rana.soikat@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <i className="fa-solid fa-location-dot text-sky-500"></i>
              <div>
                <p>Address</p>
                <a href="#">Mujibnagor Road,Mujibnagor,Meherpur</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="copyright text-center bg-slate-800 text-white py-3">
        <div>&copy; 2023 Tanvir - All Rights Reserved.</div>
      </section>
    </div>
  )
}

export default Footer