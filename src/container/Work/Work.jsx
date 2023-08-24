import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const staticWorks = [
  {
    imgUrl: images.foodOrder,
    name: "name",
    title: "Food Order",
    projectLink: "https://uixufoodorder.netlify.app",
    codeLink: "https://github.com/Dylan03122003/Food-Order",
    description:
      "This website was built with a perfect design, nice looking where users can feel more appetizing when looking for food.",
    tags: ["UI/UX"],
  },
  {
    imgUrl: images.mapty,
    name: "name",
    title: "Mapty",
    projectLink: "https://uiuxmapty.netlify.app",
    codeLink: "https://github.com/Dylan03122003/Mapty",
    description:
      "With many friendly functionalities where users can keep track of their workout from place to place.",
    tags: ["Vanilla JavaScript"],
  },
  {
    imgUrl: images.calculator,
    name: "name",
    title: "Calculator",
    projectLink: "https://uiuxcalculator.netlify.app",
    codeLink: "https://github.com/Dylan03122003/Calculator",
    description:
      "This is just a simple calculator but looks like a modern calculator on our computer.",
    tags: ["Vanilla JavaScript"],
  },
  {
    imgUrl: images.bookstore,
    name: "Bookstore",
    title: "Bookstore",
    projectLink: "https://bookstore-b2yq.onrender.com",
    codeLink: "https://github.com/Dylan03122003/bookstore_client",
    description:
      "Welcome to our cutting-edge online bookstore – a digital haven for book enthusiasts that merges the charm of traditional bookstores",
    tags: ["React JS"],
  },
];

const Work = () => {
  const [works] = useState(staticWorks);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("React JS");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setFilterWork(staticWorks.filter((work) => work.tags.includes("React JS")));
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["UI/UX", "Vanilla JavaScript", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
