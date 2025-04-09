import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { Link } from "react-scroll";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <>
      {/* Navbar Section */}
      <header
        className={`fixed top-0 left-0 w-full z-50 ${
          scrolled ? "bg-black shadow-md" : "bg-transparent"
        } transition-all`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
          <span className="text-white text-2xl font-bold">Bilal Ahmed</span>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              to="Home-section"
              smooth
              duration={800}
              className="text-white hover:text-blue-500 text-lg font-semibold cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about-section"
              smooth
              duration={800}
              className="text-white hover:text-blue-500 text-lg font-semibold cursor-pointer"
            >
              About
            </Link>
            <Link
              to="project-section"
              smooth
              duration={800}
              className="text-white hover:text-blue-500 text-lg font-semibold cursor-pointer"
            >
              Project
            </Link>
            <Link
              to="skills-section"
              smooth
              duration={800}
              className="text-white hover:text-blue-500 text-lg font-semibold cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="service-section"
              smooth
              duration={800}
              className="text-white hover:text-blue-500 text-lg font-semibold cursor-pointer"
            >
              Service
            </Link>
            <Button
              onClick={() => window.open("/resume2.pdf", "_blank")}
              className="bg-white text-black font-semibold rounded-full px-6 py-2 hover:bg-green-500"
            >
              Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl"
            >
              {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black px-6 pt-4 pb-6 space-y-4 flex flex-col items-start text-white">
            <Link
              onClick={() => setMenuOpen(false)}
              to="Home-section"
              smooth
              duration={800}
              className="text-lg font-semibold cursor-pointer hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              to="about-section"
              smooth
              duration={800}
              className="text-lg font-semibold cursor-pointer hover:text-blue-500"
            >
              About
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              to="project-section"
              smooth
              duration={800}
              className="text-lg font-semibold cursor-pointer hover:text-blue-500"
            >
              Project
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              to="skills-section"
              smooth
              duration={800}
              className="text-lg font-semibold cursor-pointer hover:text-blue-500"
            >
              Skills
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              to="service-section"
              smooth
              duration={800}
              className="text-lg font-semibold cursor-pointer hover:text-blue-500"
            >
              Service
            </Link>
            <Button
              onClick={() => window.open("/resume2.pdf", "_blank")}
              className="bg-white text-black font-semibold rounded-full px-6 py-2 hover:bg-green-500"
            >
              Resume
            </Button>
          </div>
        )}
      </header>

      {/* Home Section */}
      <section
  id="Home-section"
  className="Home-section text-white bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] body-font"
>
  <div className="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center">
    {/* Left Content */}
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-14 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="text-4xl sm:text-6xl font-bold leading-tight animate__animated animate__fadeInUp">
        Hello 👋, It's Me <br className="sm:hidden" />{" "}
        <span className="text-blue-400">Bilal Ahmed</span>
      </h1>
      <h2 className="text-2xl sm:text-4xl font-semibold mt-4 text-gray-300">
        I am a <span className="text-green-400">Frontend Developer</span>
      </h2>
      <p className="mt-8 text-xl sm:text-2xl text-gray-400 font-medium">
        Based in Karachi, Pakistan
      </p>
      <p className="text-lg sm:text-xl text-gray-300 font-semibold mt-4">
        Specialized in{" "}
        <span className="text-pink-400">HTML, CSS, JavaScript</span>,{" "}
        <span className="text-yellow-300">React.js</span>,{" "}
        <span className="text-blue-300">Next.js</span>
      </p>
    </div>

    {/* Right Side Image */}
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <img
  className="object-cover object-center rounded-2xl shadow-2xl"
  alt="hero"
  src="https://images.unsplash.com/photo-1735825764452-7c77b0bbd7a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTA1fHx0ZWNobm9sb2d5fGVufDB8fDB8fHww"
/>
    </div>
  </div>
</section>


    </>
  );
};  

export default Navbar;
