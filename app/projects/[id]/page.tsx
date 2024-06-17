import { cache } from "react";
import { getSdk } from "../../../src/lib/__generated/sdk";
import { graphQLClient } from "../../../src/lib/client";
import "./ui/project.css";

const getProject = cache(async (id: string) => {
  return await getSdk(graphQLClient).Project({ id });
});

export default async function Page({ params }: { params: { id: string } }) {
    const { project } = await getProject(params.id);
    
  return (
    <div id="project-page" className="container column">
      <img src={project.image.url} alt="" />
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
