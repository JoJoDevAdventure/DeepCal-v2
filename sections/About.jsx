"use client";

import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <Element name="about">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| Deepcal's Vision" textStyles="text-center" />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          The current process for{" "}
          <span className="font-extrabold text-white">calibrating cameras</span>{" "}
          used in{" "}
          <span className="font-extrabold text-white">
            cars, drones, industrial machines
          </span>
          , and{" "}
          <span className="font-extrabold text-white">
            last-mile delivery bots
          </span>{" "}
          is <span className="font-extrabold text-white">slow, expensive,</span>{" "}
          and lacking{" "}
          <span className="font-extrabold text-white">scalability</span>.
          DeepCal provides a{" "}
          <span className="font-extrabold text-white">
            software-only solution
          </span>{" "}
          that fully automates the entire calibration process chain, speeding up{" "}
          <span className="font-extrabold text-white">
            development, production,
          </span>{" "}
          and <span className="font-extrabold text-white">maintenance</span>.
        </motion.p>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </Element>
  </section>
);

export default About;
