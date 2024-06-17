import Link from "next/link";
import {  PostImageFragment } from "../../../src/lib/__generated/sdk";
import "./projectCard.css";

interface ProjectCardProps {
  image: PostImageFragment;
  title: string;
  description: string;
  link: string;
}

export function ProjectCard({
  image,
  title,
  description,
  link,
}: ProjectCardProps) {
  return (
    <div className="project-card wrapper">
      <div className="image" style={{ backgroundImage: `url(${image.url})` }} />
      <Link className="title" href={link}>
        {title}
      </Link>
      <p className="description">{description}</p>
    </div>
  );
}
