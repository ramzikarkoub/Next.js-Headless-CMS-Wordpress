// "use client";
// import React from "react";
// import { useState, useEffect } from "react";
// import ProjectCard from "../../components/ProjectCard";
// import Footer from "../../components/Foote";
// import Header from "../../components/Nav";
// import OnboardingSteps from "../../components/OnboardingSteps";

// export default function allprojects() {
//   const [projects, setProjects] = useState([]);
//   useEffect(() => {
//     const fetchProjects = async () => {
//       const response = await fetch(
//         "https://www.ramzikarkoub.com/wp-json/wp/v2/project?acf_format=standard"
//       );
//       const results = await response.json();

//       setProjects(results);
//     };
//     fetchProjects();
//   }, []);
//   return (
//     <div>
//       <Header />

//       <div className="bg-white py-24 sm:py-32 ">
//         <OnboardingSteps />
//         <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
//           <div className="mx-auto max-w-2xl lg:mx-0 ">
//             <h2 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//               RAMZI's PORTFOLIO
//             </h2>
//             <p className="mt-2 text-lg leading-8 text-gray-600">
//               Hi there! I developed this page using NEXT.JS with Wordpress
//               serving as a Headless CMS. Using the Advanced Custom Fields (ACF)
//               plugin, I created a custom field group named "projects" to
//               dynamically retrieve the data showcased below. Good stuff! 😄
//             </p>
//           </div>
//           <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//             {projects.map((project) => (
//               <ProjectCard project={project} />
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// allprojects.js
import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import Footer from "../../components/Foote";
import Header from "../../components/Nav";
import Joyride from "react-joyride";

/*
 * If your steps are not dynamic you can use a simple array.
 * Otherwise you can set it as a state inside your component.
 */

export default function AllProjects() {
  const [projects, setProjects] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://www.ramzikarkoub.com/wp-json/wp/v2/project?acf_format=standard"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const results = await response.json();
        setProjects(results);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <Header />

      <div className="bg-white py-24 sm:py-32 ">
        {/* <OnboardingSteps /> */}
        {/* {isClient && <Joyride steps={steps} />} */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl lg:mx-0 ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              RAMZI's PORTFOLIO
            </h2>

            <p className="mt-2 text-lg leading-8 text-gray-600">
              Hi there! I developed this page using NEXT.JS with Wordpress
              serving as a Headless CMS. Using the Advanced Custom Fields (ACF)
              plugin, I created a custom field group named "projects" to
              dynamically retrieve the data showcased below. Good stuff! 😄
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
