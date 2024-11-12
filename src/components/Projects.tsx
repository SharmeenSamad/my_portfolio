import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const data = [
{
    id: 0,
    title:"Static Interactive Resume Builder",
    desc: "Build a static resume using HTML, CSS, and TypeScript.",
    img: "/project_01.png",
    tags: ["HTML","CSS","TypeScript","GITHub"],
},

{
  id: 1,
  title:"Dynamic Resume Builder with Form",
  desc: "Convert the static resume into a Dynamic Resume Builder where users can fill out a form, and the resume is generated based on their input. ",
  img: "/project_02.png",
  tags: ["HTML","CSS","TypeScript"],
},

{
  id: 2,
  title:"Editable Resume",
  desc: "Make the generated resume editable after it’s created.",
  img: "/project_03.png",
  tags: ["HTML","CSS","TypeScript"],
},

{
  id: 3,
  title:" Unique Path and Shareable Link",
  desc: "Generate a unique URL for each resume based on the user’s username, and allow the resume to be shared and downloaded.",
  img: "/project_04.png",
  tags: ["HTML","CSS","TypeScript"],
}
];
const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el)=>(<Card 
        key={el.id} 
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  );
};

export default Projects;