"use client";
import { useRouter } from "next/router";
// import { useState, useEffect } from "react";

function Project() {
  const router = useRouter();
  // const [projects, setProjects] = useState([]);
  const handlerouting = () => {
    router.push("/projects");
  };
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     const response = await fetch(
  //       "https://www.ramzikarkoub.com/wp-json/wp/v2/project?acf_format=standard"
  //     );
  //     const results = await response.json();
  //     setProjects(results);
  //   };
  //   fetchProjects();
  // }, []);

  return (
    <div
      className="flex justify-center items-center h-screen will-change-contents 
    "
    >
      <div className="text-center border border-gray-300 border-3 max-w-xl p-20">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          RAMZI's PORTFOLIO
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Hi there! I developed this Portfolio using NEXT.JS with Wordpress
          serving as a Headless CMS. Using the Advanced Custom Fields (ACF)
          plugin, I created a custom field group named "projects" to dynamically
          retrieve the data. Good stuff! 😄
        </p>

        <button
          onClick={handlerouting}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
        >
          Cool! Take me there
        </button>
      </div>
    </div>
  );
}

export default Project;
