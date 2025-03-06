import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3am2b0r",
        "template_np63g1o",
        form.current,
        "BV4zHr1IPKFn9TZg2"
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message!");
        }
      );
  };

  const removecontent = () => {
    
  }

  return (
    <section className="text-gray-600 body-font relative bg-gray-900 py-12">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          {/* Left Side - Contact Information */}
          <div className="lg:w-1/2 w-full text-left mb-12 lg:mb-0">
            <h1 className="sm:text-5xl text-4xl font-bold text-white text-center mb-6">Contact Us</h1>
            <p className="text-white text-xl text-center font-medium mb-6">
              Thank you for visiting my website. If you have any 
              <br />
              questions or comments, feel free to reach out!
            </p>

            <div className="flex justify-center space-x-8 mt-6">
              <i className="fa-solid fa-envelope text-blue-600 text-2xl"></i>
              <p className="text-white text-lg font-semibold">m.bilaljaliyawala@email.com</p>
            </div>

            <div className="flex justify-center space-x-8 mt-6">
              <i className="fa-solid fa-phone text-blue-600 text-2xl"></i>
              <p className="text-white text-lg font-semibold">+923190266227</p>
            </div>

            <div className="flex justify-center space-x-6 mt-4">
              <a className="text-gray-400 hover:text-blue-400 transition duration-300" href="#">
                <i className="fab fa-facebook-f text-3xl"></i>
              </a>
              <a className="text-gray-400 hover:text-blue-400 transition duration-300" href="https://www.linkedin.com/in/bilal-ahmed-a793632b4/">
                <i className="fab fa-linkedin text-3xl"></i>
              </a>
              <a className="text-gray-400 hover:text-gray-500 transition duration-300" href="https://github.com/Bilalgithub009">
                <i className="fab fa-github text-3xl"></i>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2 w-full bg-gray-800 p-8 rounded-lg shadow-lg">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-wrap -m-2">
                {/* Name Input */}
                <div className="p-2 md:w-1/2 w-full">
                  <label htmlFor="name" className="block text-white text-sm font-semibold mb-3">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full rounded-lg bg-gray-700 border border-gray-600 focus:border-indigo-400 text-white p-3 outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300 placeholder:translate-x-2 placeholder:scale-90 focus:placeholder:translate-x-0 focus:placeholder:scale-100"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="p-2 md:w-1/2 w-full">
                  <label htmlFor="email" className="block text-white text-sm font-semibold mb-3">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full rounded-lg bg-gray-700 border border-gray-600 focus:border-indigo-400 text-white p-3 outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300 placeholder:translate-x-2 placeholder:scale-90 focus:placeholder:translate-x-0 focus:placeholder:scale-100"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Message Input */}
                <div className="p-2 w-full">
                  <label htmlFor="message" className="block text-white text-sm font-semibold mb-2 mt-4">Message</label>
                  <textarea
                    name="message"
                    className="w-full rounded-lg bg-gray-700 border border-gray-600 focus:border-indigo-400 text-white p-6 outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300 placeholder:translate-x-2 placeholder:scale-90 focus:placeholder:translate-x-0 focus:placeholder:scale-100"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="p-2 w-full">
                  <button onClick={removecontent()} type="submit" className="w-full text-white bg-indigo-500 hover:bg-indigo-600 py-3 rounded-lg text-lg font-bold transition duration-300">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
