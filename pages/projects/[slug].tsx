// pages/projects/[id].tsx

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/Foote";
import Header from "../../components/Nav";
import UsedTechnologies from "../../components/UsedTechnologies";

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState([]);
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(
          `https://www.ramzikarkoub.com/wp-json/wp/v2/project?acf_format=standard&slug=${slug}`
        );
        if (response.ok) {
          const data = await response.json();
          setProject(data);
        } else {
          console.error("Failed to fetch project data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    if (slug) {
      fetchProject();
    }
  }, [slug]);

  return (
    <>
      <Header />
      <div>
        {project && project.length > 0 && (
          <div>
            <div className="bg-white py-24 sm:py-32 ">
              <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                <div className="mx-auto max-w-5xl lg:mx-0 ">
                  <h1
                    className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    dangerouslySetInnerHTML={{
                      __html: project[0].title.rendered,
                    }}
                  />
                  <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
                  <p
                    className="mt-2 text-lg leading-8 text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: project[0].content.rendered,
                    }}
                  />

                  <UsedTechnologies
                    technologies={project[0].acf.technologiesTechnologies}
                  />
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
