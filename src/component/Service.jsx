
function Service() {
  return (
    <section id="service-section" className="text-gray-600 body-font ">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="text-5xl font-bold title-font text-white mb-12 text-center">
      My Services
    </h1>
    <div className="flex flex-wrap -m-4 justify-center items-center">
  {/* Web App Development Card */}
  <div className="p-4 w-full md:w-1/2">
    <div className="h-full bg-gray-100 p-10 rounded-lg hover:bg-orange-400 hover:text-white transition-transform transform hover:scale-105">
      <div className="flex justify-center">
        <i className="fa-solid fa-laptop-code mb-4 text-5xl"></i>
      </div>
      <h1 className="font-bold text-2xl text-center">Web App Development</h1>
      <p className="leading-relaxed mb-5 mt-4 font-medium text-center">
        I specialize in creating web apps that are scalable, responsive, and provide a smooth user experience.
      </p>
    </div>
  </div>

  {/* UI UX Design Card */}
  <div className="p-4 w-full md:w-1/2">
    <div className="h-full bg-gray-100 p-10 rounded-lg hover:bg-orange-400 hover:text-white transition-transform transform hover:scale-105">
      <div className="flex justify-center">
        <i className="fa-solid fa-laptop-code mb-4 text-5xl"></i>
      </div>
      <h1 className="font-bold text-2xl text-center">UI UX Design</h1>
      <p className="leading-relaxed mb-5 mt-4 font-medium text-center">
        I specialize in creating UI/UX design web apps that are scalable, responsive, and provide a smooth user experience.
      </p>
    </div>
  </div>

  {/* Backend Development Card */}
  <div className="p-4 w-full md:w-1/2">
    <div className="h-full bg-gray-100 p-10 rounded-lg hover:bg-orange-400 hover:text-white transition-transform transform hover:scale-105">
      <div className="flex justify-center">
        <i className="fa-solid fa-comment-dots mb-4 text-5xl"></i>
      </div>
      <h1 className="font-bold text-2xl text-center">Backend Development</h1>
      <p className="leading-relaxed mb-5 mt-4 font-medium text-center">
        I focus on building responsive APIs and services that ensure a seamless user experience.
      </p>
    </div>
  </div>
</div>

  </div>
</section>

  );
}

export default Service;