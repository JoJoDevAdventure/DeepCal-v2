"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Element } from "react-scroll";
import { ExploreCard, TitleText, TypingText } from "../components";
import { exploreWorlds } from "../constants";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";

const Explore = () => {
  const [active, setActive] = useState("ADAS");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <Element name="solutions">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <TypingText title="| Our Solutions" textStyles="text-center" />
          <TitleText
            title={
              <>
                Discover the complete solution{" "}
                <br className="md:block hidden" /> for all your calibration
                needs
              </>
            }
            textStyles="text-center"
          />
          <div className="mt-[50px] flex lg:flex-row flex-col md:min-h-[70vh] min-h-[100vh] gap-5">
            {exploreWorlds.map((world, index) => (
              <ExploreCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
                desc={world.desc}
              />
            ))}
          </div>
        </motion.div>
      </Element>
    </section>
  );
};

export default Explore;