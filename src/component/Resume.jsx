import React from "react";



function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-10 shadow-2xl rounded-3xl transition-all">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-blue-700 tracking-tight">
            Bilal Ahmed
          </h1>
          <p className="text-xl mt-2 font-medium text-gray-700">
            Frontend Developer || MERN Stack Developer
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Email:{" "}
            <a href="m.bilaljaliyawala@gmail.com" className="text-blue-500">
              m.bilaljaliyawala@gmail.com
            </a>{" "}
            | Phone: 3132933803
          </p>
          <p className="text-sm text-gray-500">
            Karachi, Pakistan | DOB: 21 september ,2001
          </p>
          <p className="text-sm text-gray-500">
            <a
              href="https://my-portfolio-henna-ten-51.vercel.app/"
              className="text-blue-500 hover:underline"
            >
              Portfolio
            </a>{" "}
            |
            <a
              href="https://www.linkedin.com/in/bilal-ahmed-a793632b4/"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>{" "}
            |
            <a
              href="https://github.com/Bilalgithub009"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3 border-b pb-2">
            Summary
          </h2>
          <p className="text-gray-600 leading-relaxed">
            "Passionate and detail-oriented Frontend Developer with expertise in
            crafting dynamic and responsive web applications. Proficient in
            modern technologies, including HTML, CSS, JavaScript, React,
            Next.js, and Tailwind CSS, with handson experience in version
            control using GitHub. Skilled in integrating backend technologies
            like Node.js and MongoDB to deliver full-stack solutions. Adept at
            creating user-friendly interfaces using frameworks like Bootstrap,
            ensuring seamless user experiences. Committed to staying updated
            with industry trends and delivering high-quality, efficient code for
            impactful digital solutions."{" "}
          </p>
        </section>

          <div className="flex justify-between items-center">

          
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3 border-b pb-2">
            Work Experience
          </h2>
          <div className="text-gray-700 space-y-4">
            <div>
              <strong>Ecommerce website – Own Build</strong> <br />
              <span className="text-sm text-gray-500">
                november 2024 | Karachi, Pakistan
              </span>
              <p>
               Build Ecommerce Website Developing a products from scratch:{" "}
                <a href="https://react-e-commerce-store-sooty.vercel.app/" className="text-blue-500">
                  Ecommerce site
                </a>
              </p>
            </div>
            
            <div>
              <strong>SMIT ( complete Student Portal ) – Team Work</strong> <br />
              <span className="text-sm text-gray-500">
                <p>Build Student Portal Student Login Admin site New Teacher Register <br /> Assignment post Advantage </p>
                  Karachi
              </span>
            </div>
          </div>
        </section>
        {/* project */}
        <section class="mb-8">
          <h2 class="text-3xl font-semibold text-gray-800 mb-3 border-b pb-2">
            Projects
          </h2>
          <ul class="space-y-2 list-disc list-inside ms-4 text-blue-500">
            <li>
              <strong>Ecommerce Website:</strong>
              <a
                href="https://react-e-commerce-store-sooty.vercel.app/"
                class="text-blue-500 ms-4 text-lg underline"
                target="_blank"
              >
                Live Demo
              </a>
            </li>
            <li>
              <strong>Blogging Website:</strong>
              <a
                href="https://bilalgithub009.github.io/blogging-website/"
                class="text-blue-500 ms-4 text-lg underline"
                target="_blank"
              >
                Link
              </a>
            </li>
            <li>
              <strong>Clock Analog:</strong>
              <a
                href="https://bilalgithub009.github.io/clock-analog/"
                class="text-blue-500 ms-4 text-lg underline"
                target="_blank"
              >
                Link
              </a>
            </li>

            <li>
              <strong>My Portfolio:</strong>
              <a
                href="https://my-portfolio-henna-ten-51.vercel.app/"
                class="text-blue-500 ms-4 text-lg underline"
                target="_blank"
              >
                Portfolio Link
              </a>
            </li>
          </ul>
        </section>
        </div>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3 border-b pb-2">
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
            <span className="bg-blue-100 px-3 py-1 rounded-full">React.js</span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">HTML CSS</span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">JavaScript + ES6</span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">Bootsrap</span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">MongoDB</span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">
              Tailwind Css
            </span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">Firebase</span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">
              REST APIs
            </span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">
              Next js
            </span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">
              UI User Interfaces
            </span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">
              Material UI
            </span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">ShadCn</span>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3 border-b pb-2">
            Education
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>intermediate (Sir Adamjee Institude)</li>
            <li>Hybrid Web and Mobile Application Development – SMIT </li>
            <li>Frontend Development course At – JAWAN PAKISTAN</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3 border-b pb-2">
            Languages
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Urdu – Native or Bilingual Proficiency</li>
            <li>English – Native or Bilingual Proficiency</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3 border-b pb-2">
            Interests
          </h2>
          <p className="text-gray-600">
            UI/UX, Reading Books, Networking, Machine Learning
          </p>
          <p className="text-gray-600">
            Make Responsive & Market Demanded Landing Page
          </p>
          <p className="text-gray-600">API,S integeration</p>
        </section>

        <footer className="mt-10 text-center text-sm text-gray-500">
          Designed & Developed by Bilal Ahmed
        </footer>
      </div>
    </div>
  );
}

export default Resume;
