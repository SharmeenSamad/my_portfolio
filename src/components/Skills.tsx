import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
        <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
                <h2 className="text-4xl md:text-5xl">FINTech Experties</h2>
                <p className="text-gray-500 pt-2">
                One of the most important fintech skills for executive management is the ability to craft 
                and execute a fintech strategy that aligns with the organization"s vision, mission, and goals.
                 A fintech strategy should address how the organization will leverage fintech solutions to 
                 create value for its customers, employees, partners, and stakeholders. It should also 
                 consider the external factors that affect the fintech landscape, such as regulations, 
                 competitors, customer preferences, and technological trends. Executive managers need to 
                 have a clear understanding of the fintech ecosystem, the opportunities and threats it poses,
                 and the best practices and frameworks to guide their decision-making.
                </p>
            </div>
            <div>
                <div data-aos="flip-left" className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
                <div className="space-y-2">
                <h2>Typescript</h2>
                <h2 >React.js</h2>
                <h2 >Next.js</h2>
                </div>             
                <div className="space-y-2">
                <h2 >Tailwind</h2>
                <h2 >CSS</h2>
                <h2 >Node.js</h2>
                </div>
                </div>
                </div>
                </div>
        
    </div>
  );
};

export default Skills;