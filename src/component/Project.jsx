import { Button } from "antd";
import { useState } from "react";

function Project() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div id="project-section" className="mt- ">
        <h1 className="text-5xl text-white text-center font-bold">
          Project <span className="text-yellow-400 text-5xl">ShowCase</span>
        </h1>
      </div>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {projects.slice(0, showAll ? projects.length : 3).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <div className="text-center mt-8">
            {!showAll ? (
              <Button onClick={() => setShowAll(true)} className="px-6 py-2 rounded-full font-bold shadow-lg">
                Show More
              </Button>
            ) : (
              <Button onClick={() => setShowAll(false)} className="px-6 py-2 rounded-full font-bold shadow-lg">
                Show Less
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectCard({ project }) {
  const [tilt, setTilt] = useState(0);

  const handleMouseEnter = () => {
    setTilt(50); // Tilt effect
  };

  const handleMouseLeave = () => {
    setTilt(0); // Reset tilt effect
  };

  return (
    <div className="p-4 md:w-1/3 relative">
      <div
        className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg transform perspective-1000 transition-all duration-700 ease-out"
        style={{ transform: `perspective(1000px) rotateX(${tilt}deg)` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={project.image} alt={project.title} />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-white mb-3">{project.title}</h1>
          <p className="leading-relaxed mb-3 text-white">{project.description}</p>
          <div className="flex justify-between items-center flex-wrap">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <Button className="w-24 rounded-full font-bold">View Project</Button>
            </a>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
              <Button className="w-24 rounded-full font-bold">Code</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "E-Commerce",
    description: "Build an Ecommerce website using React and modern UI/UX.",
    image: "https://www.cloudways.com/blog/wp-content/uploads/ecommerce-website-checklist-b-.jpg",
    liveLink: "https://react-e-commerce-store-sooty.vercel.app/",
    codeLink: "https://github.com/Bilalgithub009/React-e_commerce_Store",
  },
  {
    title: "Apple Website",
    description: "A simple To-Do app to manage tasks efficiently.",
    image: "https://fdn.gsmarena.com/imgroot/news/19/11/apple-removes-reviews-ratings-from-website/-727/gsmarena_002.jpg",
    liveLink: "https://bilalgithub009.github.io/apple-website/",
    codeLink: "https://github.com/Bilalgithub009/apple-website",
  },
  {
    title: "To-Do App",
    description: "A simple To-Do app to manage tasks efficiently.",
    image: "https://images.ctfassets.net/lpvian6u6i39/GtD3qzHrBIgVZJNIJBlO0/8610e2883df2dec28305841aa1ddd2ae/todo-app.png",
    liveLink: "https://bilalgithub009.github.io/todo_app_project/",
    codeLink: "https://bilalgithub009.github.io/todo_app_project/",
  },
  {
    title: "Calculator",
    description: "A simple To-Do app to manage tasks efficiently.",
    image: "https://media.istockphoto.com/id/1470926869/vector/calculator-icon-vector-on-white-background-savings-finances-sign-economy-calculate-for-ui-ux.jpg?s=612x612&w=0&k=20&c=eKuFOmQyAxxKfAMeD-h2gSJEh_ctNdWuNPPn2-E1Gno=",
    liveLink: "https://bilalgithub009.github.io/calculator-project/",
    codeLink: "https://github.com/Bilalgithub009/calculator-project",
  },
  {
    title: "Text Editor",
    description: "A Text Editor with the help of Html CSS .",
    image: "https://standingtech.com/wp-content/uploads/2021/04/Pasted-into-.png",
    liveLink: "https://bilalgithub009.github.io/text-editor/",
    codeLink: "https://github.com/Bilalgithub009/text-editor",
  },
  {
    title: "Blogging Website",
    description: "A blogging platform to share and read blogs.",
    image: "https://www.elegantthemes.com/blog/wp-content/uploads/2022/12/Best-Blogging-Platforms-featured-image.png",
    liveLink: "https://bilalgithub009.github.io/blogging-website/",
    codeLink: "https://github.com/Bilalgithub009/blogging-website",
  },
];

export default Project;
