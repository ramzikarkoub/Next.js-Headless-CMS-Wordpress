import Image from "next/image";
import { useRouter } from "next/navigation";
import UsedTechnologies from "./UsedTechnologies";

function ProjectCard({ project }) {
  console.log(project);
  const router = useRouter();
  const handleReadMoreButton = () => {
    router.push(`/projects/${project.slug}`);
  };
  return (
    <article
      key={project.id}
      className="flex max-w-xl flex-col items-start justify-stretch rounded-lg
               hover:ring-gray-900/20 shadow-lg ring-1 ring-gray-900/5 relative"
    >
      <div className="flex items-center justify-center w-full  border border-gray-300 border-3 rounded-t-lg overflow-hidden">
        <Image
          src={project.acf.image_thumbnail}
          width={350}
          height={200}
          className="w-full h-full object-cover"
          layout="responsive"
        />
      </div>
      <div className="mx-5">
        <h3 className="my-6 text-xl font-bold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href="{project.href}">
            <span
              dangerouslySetInnerHTML={{ __html: project.title.rendered }}
            />
          </a>
        </h3>
        <p
          className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600"
          dangerouslySetInnerHTML={{ __html: project.content.rendered }}
        />
        <UsedTechnologies technologies={project.acf.technologiesTechnologies} />
      </div>
      <button
        onClick={handleReadMoreButton}
        className="text-white bg-gray-700 py-1 px-2 rounded-md self-center absolute bottom-0 w-full rounded-b-lg rounded-t-none"
      >
        Read more...
      </button>
    </article>
  );
}

export default ProjectCard;
