import React from "react";
import ProjectCard from "./ProjectCard";

import projectImg1 from "../../assets/ProjectImage1.jpeg";
import projectImg2 from "../../assets/ProjectImage2.jpeg";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>

      <div className="py-12 flex flex-col gap-12">

        {/* PROJECT 1 */}
        <ProjectCard
          title="Brand the Unbrand | LPU"
          main="Transformed an unbranded product line (Bagsyne) into a recognized brand by offering affordable laptop bags at ₹400 and side bags at ₹250. Successfully generated ₹2,850 profit through effective promotion, sales strategy, and negotiation."
          points={[
            "Applied real-world marketing and branding strategies.",
            "Managed sales operations and customer handling independently.",
            "Developed pricing strategy to maximize profit.",
            "Learned brand positioning through practical execution.",
          ]}
          image={projectImg1}
        />

        {/* PROJECT 2 */}
        <ProjectCard
          title="Professional Development & Networking | LPU"
          main="Organized and led the 'Inspiration Wall' event where 30+ students shared motivational ideas. Designed interactive activities to boost student engagement, reflection, and confidence."
          points={[
            "Created engaging participation methods to encourage involvement.",
            "Strengthened teamwork as signed contributions were showcased.",
            "Grew leadership, management, and event coordination skills.",
            "Enhanced networking skills by interacting with diverse groups.",
          ]}
          image={projectImg2}
        />

      </div>
    </div>
  );
};

export default Projects;
