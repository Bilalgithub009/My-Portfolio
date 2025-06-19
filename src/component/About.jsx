import { Button } from "antd";
import React from "react";
import { Link } from "react-scroll";
import bilalimage from "../images/gallery.jpeg";

function About() {
  return (
    <>
      <div
        id="about-section"
        className="text-5xl font-bold items-center mt-10 bg-white "
      >
        <h1 className="text-center mt-4 font-extrabold text-black ">
          About <span className="text-blue-600 text-center">Me</span>
        </h1>
          </div>

      <section className="text-gray-600 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/6 mx-auto   flex flex-wrap">
            <img
              alt="profile"
              className="imagecards hover:scale-110 sm:max-w-full sm:max-h-full  transition-transform duration-500 lg:w-1/2 sm:w-3/4 w-full h-auto object-cover object-center rounded shadow-lg"
              // src={"/resume2.png"}
              // src={("..images../saylanicertificate.pdf")}
              src={bilalimage}
            />

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-3xl title-font font-medium mb-1 text-black">
                I M BILAL AHMED
              </h1>
              <div className="flex mb-4 text-black">
                <p>Frontend Developer | Full Stack Developer</p>
              </div>
              <p className="leading-relaxed text-black font-semi-bold">
                As a proficient MERN Stack Developer, I specialize in building
                dynamic and responsive web applications using MongoDB,
                Express.js, React.js, and Node.js. My expertise extends to
                JavaScript, and Bootstrap, enabling me to create versatile and
                visually appealing websites. With a strong command of front-end
                and back-end technologies, I deliver seamless and efficient
                solutions tailored to meet diverse client needs.
              </p>

              <div className="flex items-center">
                <p className="text-blue-600 font-bold m-2">Email :</p>
                <p className="text-black hover:text-gray-500">
                  m.bilaljaliyawala@gmail.com
                </p>
              </div>

              <div className="flex items-center">
                <p className="text-blue-600 font-bold m-2">Place :</p>
                <p className="text-black hover:text-gray-500">Karachi</p>
              </div>

              <div className="flex items-center">
                <p className="text-blue-600 font-bold m-2">Birthday :</p>
                <p className="text-black hover:text-gray-500">21 Sep 2001</p>
              </div>

              <div className="flex items-center">
                <p className="text-blue-600 font-bold m-2">Phone :</p>
                <p className="text-black hover:text-gray-500">+923190266227</p>
              </div>

              <div className="flex items-center">
                <p className="text-blue-600 font-bold m-2">Github :</p>
                <p className="text-black hover:text-gray-500">
                  /Bilalgithub009
                </p>
              </div>

              <div className="flex items-center">
                <>
                  {/* From Uiverse.io by Nawsome */}
                  <div className="buttons">
                    <a href="https://www.linkedin.com/in/bilal-ahmed-a793632b4/">

                    <button className="btn">
                      <span />
                      <p
                        data-start="good luck!"
                        data-text="Me"
                        data-title="Hire!"
                        />
                    </button>
                        </a>
                        
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
