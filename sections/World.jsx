"use client";

import { motion } from "framer-motion";

import { TitleText, TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| DeepCal's explanation video" textStyles="text-center" />
      <TitleText
        title={
          <>
            Discover How  DeepCal's <br className="md:hidden"/>
            <span className="text-[#0093D2]">Zero-Click </span> <br className="md:hidden"/> Software is
            Transforming Calibration
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full md:h-[720px] h-[250px] justify-center"
      >
        <iframe
        className="w-full h-full"
          src="https://www.youtube.com/embed/rMhrGfMJd2U?si=iI90musvbdFqbJpE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
