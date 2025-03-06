import { Flex, Progress } from "antd";
import React from "react";

function Skills() {
  const skills = [
    { name: "HTML5", percentage: 90, color: "bg-orange-400" },
    { name: "CSS", percentage: 80, color: "bg-blue-700" },
    { name: "JavaScript", percentage: 75, color: "bg-yellow-400" },
    { name: "React", percentage: 70, color: "bg-blue-500" },
    { name: "Tailwind CSS", percentage: 85, color: "bg-teal-400" },
    { name: "GitHub", percentage: 80, color: "bg-gray-600" },
    { name: "Bootstrap", percentage: 85, color: "bg-blue-600" },
    { name: "Firebase", percentage: 80, color: "bg-orange-400" },
    { name: "Shadcn", percentage: 70, color: "bg-blue-500" },
    { name: "Material UI", percentage: 60, color: "bg-teal-400" },
    { name: "Problem solving", percentage: 60, color: "bg-gray-600" },
    { name: "Next.js", percentage: 70, color: "bg-gray-600" },
  ];

  return (
    <>
      <section id="skills-section" className="overall w-full text-gray-600 bg-gradient-to-r bg-#F8F8F8 body-font ">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col text-center w-full mb-8">
            <div className="flex flex-col text-center w-full mb-8 bg-gradient-to-r py-10 rounded-lg">
              <div className="flex flex-row justify-center items-center text-center gap-4">
                <h1 className="sm:text-5xl text-2xl font-bold title-font text-white">
                  Skills & My Tech Stack
                </h1>
              </div>
            </div>

            {/* Skill Cards */}
            <div className="flex flex-wrap m-12 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px- py-8 rounded-lg hover:shadow-lg hover:scale-105 transition-transform bg-white">
                  <img
                    className="w-20 h-20 mx-auto mb-4"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxk8D0ycM6qcGE6lUkmkBTo0KQ_XhnATYtHw&s"
                    alt="HTML5"
                  />
                  <h2 className="title-font font-medium text-2xl text-gray-9">HTML5</h2>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-6 py-8 rounded-lg hover:shadow-lg hover:scale-105 transition-transform bg-white">
                  <img
                    className="w-20 h-20 mx-auto mb-4"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSubsfvX1GCHF8amyfEQxTz7AECFDY-oGMVTg&s"
                    alt="CSS"
                  />
                  <h2 className="title-font font-medium text-2xl text-gray-900">CSS</h2>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-6 py-8 rounded-lg hover:shadow-lg hover:scale-105 transition-transform bg-white">
                  <img
                    className="w-20 h-20 mx-auto mb-4"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--brand-company-business-brands-pack-logos-icons-2284965.png?f=webp&w=128"
                    alt="JavaScript"
                  />
                  <h2 className="title-font font-medium text-2xl text-gray-900">JavaScript</h2>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-6 py-8 rounded-lg hover:shadow-lg hover:scale-105 transition-transform bg-white">
                  <img
                    className="w-20 h-20 mx-auto mb-4"
                    src="https://img.icons8.com/color/512/bootstrap--v2.png"
                    alt="Bootstrap"
                  />
                  <h2 className="title-font font-medium text-2xl text-gray-900">Bootstrap</h2>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-6 py-8 rounded-lg hover:shadow-lg hover:scale-105 transition-transform bg-white">
                  <img
                    className="w-20 h-20 mx-auto mb-4"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7s2FVOPGar_kegylFsa9su7Hhq86le0B7cw&s"
                    alt="Tailwind CSS"
                  />
                  <h2 className="title-font font-medium text-2xl text-gray-900">Tailwind CSS</h2>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-6 py-8 rounded-lg hover:shadow-lg hover:scale-105 transition-transform bg-white">
                  <img
                    className="w-20 h-20 mx-auto mb-4"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub"
                  />
                  <h2 className="title-font font-medium text-2xl text-gray-900">GitHub</h2>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-6 py-8 rounded-lg hover:shadow-lg hover:scale-105 transition-transform bg-white">
                  <img
                    className="w-20 h-20 mx-auto mb-4"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"
                    alt="React"
                  />
                  <h2 className="title-font font-medium text-2xl text-gray-900">React</h2>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-6 py-8 rounded-lg hover:shadow-lg hover:scale-105 transition-transform bg-white">
                  <img
                    className="w-20 h-20 mx-auto mb-4"
                    src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png"
                    alt="Firebase"
                  />
                  <h2 className="title-font font-medium text-2xl text-gray-900">Firebase</h2>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-6 py-8 rounded-lg hover:shadow-lg hover:scale-105 transition-transform bg-white">
                  <img
                    className="w-20 h-20 mx-auto mb-4"
                    src="https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png"
                    alt="Shadcn"
                  />
                  <h2 className="title-font font-medium text-2xl text-gray-900">Shadcn</h2>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-6 py-8 rounded-lg hover:shadow-lg hover:scale-105 transition-transform bg-white">
                  <img
                    className="w-20 h-20 mx-auto mb-4"
                    src="https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png"
                    alt="Material UI"
                  />
                  <h2 className="title-font font-medium text-2xl text-gray-900">Material UI</h2>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-6 py-8 rounded-lg hover:shadow-lg hover:scale-105 transition-transform bg-white">
                  <img
                    className="w-20 h-20 mx-auto mb-4"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQzIpKcbzhNegLSeAdqVAVFdx1aX7Lo1eug&s"
                    alt="Problem solving"
                  />
                  <h2 className="title-font font-medium text-2xl text-gray-900">Problem solving</h2>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-6 py-8 rounded-lg hover:shadow-lg hover:scale-105 transition-transform bg-white">
                  <img
                    className="w-20 h-20 mx-auto mb-4"
                    src="https://www.svgrepo.com/show/354112/nextjs.svg"
                    alt="Next Js"
                  />
                  <h2 className="title-font font-medium text-2xl text-gray-900">Next Js</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
