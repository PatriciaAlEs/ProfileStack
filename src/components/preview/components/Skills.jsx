import React, { useContext } from "react";
import {ResumeContext} from "../../builder";

const Skills = ({ title, skills }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleTitleChange = (e) => {
    const newSkills = [...resumeData.skills];
    newSkills.find((skillType) => skillType.title === title).title = e.target.innerText;
    setResumeData({ ...resumeData, skills: newSkills });
  };

  return (
    skills && skills.length > 0 && (
      <>
        <p className="content i-bold editable" contentEditable suppressContentEditableWarning onBlur={handleTitleChange}>
          {title}
        </p>
        <p className="sub-content">{skills.join(", ")}</p>
      </>
    )
  );
};

export default Skills;
