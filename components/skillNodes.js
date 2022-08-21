import React from "react";

const SkillNodes = ({ skills }) => {
  return (
    <div className="kp-layout-skills kp-text-skills-container">
      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}
    </div>
  );
};

export default SkillNodes;
