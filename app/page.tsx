import { ProjectList } from "./projects/ui/ProjectList";
import { Contact } from "./ui/Contact";

export const revalidate = 360;

export default function Page() {
  return (
    <>
      <div style={{ flexGrow: 1 }} id="intro" className="container column">
        <section className="container column">
          <h1>Julie Buma</h1>
          <h3>Frontend Developer</h3>
          <p>I'm working on a new site!</p>
          <p>
            You can still find some older projects on my{" "}
            <a href="https://github.com/JBuma" target="_blank">
              github
            </a>{" "}
            or{" "}
            <a href="https://codepen.io/JBuma" target="_blank">
              codepen
            </a>
            , or you can send me a message below!
          </p>
        </section>
        <Contact />
      </div>
      <div className="container column ">
        <ProjectList />
      </div>
    </>
  );
}
