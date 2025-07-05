import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import rumradImg from "../assets/zumradImg.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    toast.success(`Xabaringiz muvaffaqiyatli yuborildi!`);

    // Forma tozalash
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div id="contact">
      <h2>
        <p className="text-blue-900 font-bold text-2xl ml-5 lg:ml-0 lg:text-4xl mb-10 mt-10 lg:mt-20">
          Bog'lanish
        </p>
      </h2>
      <div className="shadow-2xl rounded-md p-5 items-center grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <figure className="rounded-md">
            <img
              className="w-full max-w-xl lg:max-w-[500px] ml-0 lg:ml-10 rounded-2xl mx-auto lg:mx-0"
              src={rumradImg}
              alt="rumrad"
            />
          </figure>
        </div>
        <div>
          <form
            className="form-control ml-0 lg:ml-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              name="name"
              type="text"
              placeholder="Ism"
              className="custom-input w-full lg:max-w-[400px]"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="custom-input w-full lg:max-w-[400px] my-10"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              name="phone"
              type="tel"
              placeholder="Telefon raqam"
              className="custom-input w-full lg:max-w-[400px] mb-10"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="custom-textarea w-full lg:max-w-[400px]"
              placeholder="Xabaringizni qoldiring"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-primary w-full max-w-[150px] lg:max-w-[400px] mt-5"
            >
              Jo'natish
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Contact;
