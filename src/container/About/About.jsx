import { motion } from "framer-motion";
import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const staticAbouts = [
  {
    title: "React Developer",
    imgUrl: images.about01,
    description:
      "By studying hard, I have gained well React and styling skills. I'm confident about building a responsive dynamic website with one page or even multiple pages.",
  },
  {
    title: "Java Developer",
    imgUrl: images.about02,
    description:
      "Even though my main focus is frontend development, I still have good skills in Java language. If there is anything I cannot adapt to, I will be willing to learn anything.",
  },
];

const About = () => {
  const [abouts] = useState(staticAbouts);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
