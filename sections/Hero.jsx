"use client";

import { motion } from "framer-motion";
import { Element } from "react-scroll";
import TypedText from "../components/TypedText"; // Make sure the import path is correct
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`md:pt-[72px] pt-24`}>
    <Element name="home">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10 px-7 text-center">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            ZERO-CLICK AUTOMATED
            <br/>
            <TypedText />
            <br className="md:hidden"/>
            CALIBRATION
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          />
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

          <img
            src="/cover.gif"
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
        </motion.div>
      </motion.div>
    </Element>
  </section>
);

export default Hero;
