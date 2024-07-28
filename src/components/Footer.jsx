

import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import zumrad from '../assets/zumrad.png'
function Footer() {
  return (
    <footer className="bg-blue-900 mt-20 text-white ">
      <div className="footer-container py-5 lg:py-10 grid grid-cols-1 lg:grid-cols-3 px-5 lg:px-20 items-center">
        <div className="footer-left-part grid items-center gap-4 justify-between">
          <img src={zumrad} className="w-52 ml-10 cursor-pointer mb-2 lg:ml-0" />
          <ul className="footer-icons flex gap-12 ml-10 lg:ml-0 px-6">
            <li>
              <a
                href="https://www.instagram.com/zumrad.academy"
                target="_blank"
                className="text-2xl"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/Zumrad_Academy"
                target="_blank"
                className="text-2xl"
              >
                <FaTelegram />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@Zumrad_academy"
                target="_blank"
                className="text-2xl"
              >
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-right-part mt-10 lg:mt-10 flex gap-10 lg:gap-20 ml-10 lg:ml-0">
          <ul className="grid mb-10 gap-2 lg:gap-4 ">
            <li>
              <a href="#hero">Bosh qism</a>
            </li>
            <li>
              <a href="#category">Yo'nalishlar</a>
            </li>
            <li>
              <a href="#courses">Kurslar</a>
            </li>
          </ul>
          <ul className="grid mb-10 gap-2 lg:gap-4">
            <li>
              <a href="#popular">Mashhur kurslar</a>
            </li>
            <li>
              <a href="#teacher">Ustozlar</a>
            </li>
            <li>
              <a href="#offer">Bizning takliflar</a>
            </li>
          </ul>
        </div>
        <div className="footer-map">
          <iframe
          className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6420.862443272877!2d71.275384!3d40.359844!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIxJzM1LjQiTiA3McKwMTYnMzEuNCJF!5e1!3m2!1suz!2s!4v1722143596375!5m2!1suz!2s"
            width="400"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
