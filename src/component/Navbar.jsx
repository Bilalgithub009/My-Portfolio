import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Resume button ke click handler
  const handleResumeClick = (e) => {
    e.stopPropagation(); // Prevent bubbling issue
    window.open("/My-Portfolio/public/frontendupdate.pdf", "_blank");
    

  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="navbar container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <a className="title-font  text-white text-[28px] font-bold cursor-pointer ">
            <span className="text-white heading2  text-[28px] font-bold cursor-pointer flex">
              Bilal Ahmed
            </span>
          </a>
          <nav className=" md:ml-auto md:mr-28 flex  flex-wrap items-center text-base justify-center">
            <a
              className=" hover:text-blue-500 text-white font-bold text-xl cursor-pointer"
            >
              <Link className="mr-5 hover:text-blue-500 text-white font-bold text-xl cursor-pointer" to="Home-section" smooth={true} duration={800}>
                Home
              </Link>
            </a>
              <a
              className="mr-5 hover:text-blue-500 text-white font-bold text-xl cursor-pointer"
            >
              <Link to="about-section" smooth={true} duration={800}>
                About
              </Link>
            </a>
            <Link to="project-section" smooth={true} duration={800} className="mr-5 hover:text-blue-500 text-white font-bold text-xl cursor-pointer">
              Project
            </Link>

            <Link
              to="skills-section"
              smooth={true}
              duration={800}
              className="mr-5 hover:text-blue-500 text-white font-bold text-xl cursor-pointer"
            >
              Skills
            </Link>

            <Link
              to="service-section"
              smooth={true}
              duration={800}
              className="mr-5 hover:text-blue-500 text-white font-bold text-xl cursor-pointer"
            >
              service
            </Link>

            <Button onClick={handleResumeClick}  className="text-3xl">Resume</Button>
            
          </nav>
        </div>
      </header>

      <section className="Home-section mt-8 text-gray-600 body-font ">
        <div className="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-14 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-4xl sm:text-6xl font-bold text-white leading-tight text-center sm:text-left animate__animated animate__fadeInUp">
              Hello 👋, It's Me <br className="sm:hidden" /> <span className="text-white">Bilal Ahmed</span>
            </h1>
            <h1 className="heading title-font text-3xl sm:text-5xl font-bold text-white whitespace-nowrap overflow-hidden ">
              I am a Frontend Developer
            </h1>
            <p className="mt-10 text-3xl text-white font-bold">
              Based in Karachi, Pakistan
            </p>
            <p className="text-white text-xl sm:text-3xl font-bold text-center sm:text-left px- sm:px-0">
              Specialized in HTML, CSS, JavaScript, <span className="heading3">React.js</span>, <span className="heading3">Next.js</span>
            </p>

            <div className="flex justify-center items-center gap-10">
              {/* <button
                onClick={handleResumeClick} // Sirf Resume button par ye chalega
                className="mt-14 text-xl font-bold bg-white text-balck rounded-full px-12 ms-4 py-4 pe-"
              >
                Download Resume <i className="fa-solid fa-download ms-4 mt-1"></i>
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
