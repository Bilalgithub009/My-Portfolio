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

  const removecontent = () => {};

  return (
    <section className="text-gray-600 body-font relative bg-gray-900 py-12">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          {/* Left Side - Contact Information */}
          <div className="lg:w-1/2 w-full text-left mb-12 lg:mb-0">
            <h1 className="sm:text-5xl text-4xl font-bold text-white text-center mb-6">
              Contact Us
            </h1>
            <p className="text-white text-xl text-center font-medium mb-6">
              Thank you for visiting my website. If you have any
              <br />
              questions or comments, feel free to reach out!
            </p>

            <div className="flex justify-center space-x-8 mt-6">
              <i className="fa-solid fa-envelope text-blue-600 text-2xl"></i>
              <p className="text-white text-lg font-semibold">
                m.bilaljaliyawala@email.com
              </p>
            </div>

            <div className="flex justify-center space-x-8 mt-6">
              <i className="fa-solid fa-phone text-blue-600 text-2xl"></i>
              <p className="text-white text-lg font-semibold">+923190266227</p>
            </div>

            <div className="flex justify-center space-x-6 mt-4">
              <div className="group relative">
                   <button>

                    <a href="https://www.linkedin.com/in/bilal-ahmed-a793632b4/" target="_blank" rel="noopener noreferrer">
  {/* Paste SVG here */}

      <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M2 9h4v12H2z"
  />
  {/* <circle cx="4" cy="4" r="2" /> */}
</svg>
</a>
                  </button>
                  <span
                    className="absolute -top-14 left-[50%] -translate-x-[50%] 
                  z-20 origin-left scale-0 px-3 rounded-lg border 
                 border-gray-300 bg-white py-2 text-sm font-bold
                  shadow-md transition-all duration-300 ease-in-out 
                  group-hover:scale-100"
                  >
                    Linkedin<span></span>
                  </span>
                </div>


              <div className="group relative">
                  <button>
                    <svg
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </button>
                  <span
                    className="absolute -top-14 left-[50%] -translate-x-[50%] 
                  z-20 origin-left scale-0 px-3 rounded-lg border 
                 border-gray-300 bg-white py-2 text-sm font-bold
                  shadow-md transition-all duration-300 ease-in-out 
                  group-hover:scale-100"
                  >
                    GitHub<span></span>
                  </span>
                </div>
              <>
                
                
              </>
            </div>
          </div>

          {/* https://github.com/Bilalgithub009 */}
          {/* https://www.linkedin.com/in/bilal-ahmed-a793632b4 */}

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2 w-full bg-gray-800 p-8 rounded-lg shadow-lg">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-wrap m-">
                {/* Name Input */}
                <div className="p-2 md:w-1/2 w-full">
                  <label
                    htmlFor="name"
                    className="block text-white text-sm font-semibold mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full rounded-lg bg-gray-700 border border-gray-600 focus:border-indigo-400 text-white p-3 outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300 placeholder:translate-x-2 placeholder:scale-90 focus:placeholder:translate-x-0 focus:placeholder:scale-100"
                    placeholder="Bilal Ahmed"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="p-2 md:w-1/2 w-full">
                  <label
                    htmlFor="email"
                    className="block text-white text-sm font-semibold mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full rounded-lg bg-gray-700 border border-gray-600 focus:border-indigo-400 text-white p-3 outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300 placeholder:translate-x-2 placeholder:scale-90 focus:placeholder:translate-x-0 focus:placeholder:scale-100"
                    placeholder="m.bilaljaliyawala@gmail.com"
                    required
                  />
                </div>

                {/* Message Input */}
                <div className="p-2 w-full">
                  <label
                    htmlFor="message"
                    className="block text-white text-sm font-semibold mb-2 mt-4"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="w-full rounded-lg bg-gray-700 border border-gray-600 focus:border-indigo-400 text-white p-5 outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300 placeholder:translate-x-2 placeholder:scale-90 focus:placeholder:translate-x-0 focus:placeholder:scale-100"
                    placeholder="Looking for a proficient software developer skilled in JS and React for a specfic project"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="p-2 w-full">
                  <button
                    onClick={removecontent()}
                    type="submit"
                    className="w-full text-white bg-indigo-500 hover:bg-indigo-600 py-3 rounded-lg text-lg font-bold transition duration-300"
                  >
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
