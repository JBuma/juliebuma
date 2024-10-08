import { ProjectCard } from "./ProjectCard";
import { graphQLClient } from "../../../src/lib/client";
import { getSdk } from "../../../src/lib/__generated/sdk";
import { cache } from "react";

interface ProjectListProps {
  search?: string;
  limit?: number;
}

const getPosts = cache(async () => await getSdk(graphQLClient).Posts());

export async function ProjectList({
  search = "",
  limit = 3,
}: ProjectListProps) {
  const projects = await getPosts();

  return (
    <>
      <h1>Projects</h1>
      <div className="container column gap-xxlarge">
        {projects.projectCollection.items.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            link={`projects/${project.sys.id}`}
          />
        ))}
      </div>
    </>
  );
}
