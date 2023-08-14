import { motion } from "framer-motion";
import React, { useState } from "react";
import Rank from "../../components/Rank/Rank";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const staticSkills = [
  { name: "React", icon: images.react, level: 4, bgColor: "#ecf9ff" },
  { name: "Tailwind", icon: images.tailwind, level: 4, bgColor: "#ecf9ff" },
  { name: "JavaScript", icon: images.javascript, level: 4, bgColor: "#F5F3C1" },
  { name: "Firebase", icon: images.firebase, level: 4, bgColor: "#F5F3C1" },
  { name: "HTML", icon: images.html, level: 4, bgColor: "#FFB26B" },
  { name: "CSS", icon: images.css, level: 4, bgColor: "#ecf9ff" },
  { name: "Java", icon: images.java, level: 4, bgColor: "#ecf9ff" },
];

const Skills = () => {
  const [skills] = useState(staticSkills);

  return (
    <>
      <h2 className="head-text">
        My ultimate <span>skills</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <div className="app__flex">
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
              <Rank level={skill.level} />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
