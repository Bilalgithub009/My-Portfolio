import React from "react";

function Resume (){
return(
<>
<body class="bg-gray-100 text-gray-800">
    <div class="max-w-4xl mx-auto my-10 bg-white p-10 shadow-2xl rounded-2xl">
      <header class="text-center mb-10">
        <h1 class="text-4xl font-bold text-blue-600">Bilal Ahmed</h1>
        <p class="text-lg">Frontend Developer | React.js | Tailwind CSS</p>
        <p>Email: bilal@example.com | GitHub: github.com/bilalgithub009</p>
      </header>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold border-b pb-1 mb-3">About Me</h2>
        <p>
        "Passionate and detail-oriented Frontend Developer with expertise in crafting
dynamic and responsive web applications. Proficient in modern technologies,
including HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS, with handson experience in version control using GitHub. Skilled in integrating backend
technologies like Node.js and MongoDB to deliver full-stack solutions. Adept
at creating user-friendly interfaces using frameworks like Bootstrap, ensuring
seamless user experiences. Committed to staying updated with industry trends
and delivering high-quality, efficient code for impactful digital solutions."
.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold border-b pb-1 mb-3">Skills</h2>
        <ul class="list-disc list-inside">
          <li>React.js, JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>Tailwind CSS, Bootstrap</li>
          <li>Git & GitHub</li>
          <li>Deployments (Vercel, Netlify)</li>
          <li>Bootstrap</li>
            <li>Responsive Web Design</li>            
        </ul>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold border-b pb-1 mb-3">Projects</h2>
        <ul class="space-y-2">
          <li>
            <strong>Ecommerce Website:</strong>
            <a href="https://react-e-commerce-store-sooty.vercel.app/" class="text-blue-500 underline" target="_blank">Live Demo</a>
          </li>
          <li>
            <strong>Blogging Website:</strong>
            <a href="https://bilalgithub009.github.io/blogging-website/" class="text-blue-500 underline" target="_blank">GitHub Pages</a>
          </li>
          <li>
            <strong>Clock Analog:</strong>
            <a href="https://bilalgithub009.github.io/clock-analog/" class="text-blue-500 underline" target="_blank">GitHub Pages</a>
          </li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold border-b pb-1 mb-3">Education</h2>
        <p>Bachelor's in Computer Science – Your University Name</p>
      </section>
    </div>
  </body>


</>



)

}

export default Resume;