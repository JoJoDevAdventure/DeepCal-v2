"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              Dr. Grant Mahler
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Founder DeepCal
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[16px] text-[18px] text-white">
            I spent 11 years at BMW working on driver assistance systems, with a
            primary focus on sensors. During this time, I evaluated offerings
            from numerous suppliers, but sensor calibration consistently emerged
            as a significant challenge. After leaving BMW, I joined a supplier
            and gained insight into various OEMs and their calibration
            approaches, only to find similar disappointments. Having examined
            the industry both vertically and horizontally, I developed a
            comprehensive understanding of the different calibration solutions
            available. These solutions are often expensive, inefficient, and
            fragile. Recognizing the need for a better approach, I set out to
            develop an improved solution—and the rest is history: DeepCal was
            founded. #TheFutureIsSoftwareDriven{" "}
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <img
            src="/Newsletter.png"
            alt="planet-09"
            className="w-full lg:h-full h-auto min-h-[380px] object-cover rounded-[40px]"
          />

          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
          >
          </motion.div>

          {/* Subscription Form Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-[40px] p-8">
            {isSubscribed ? (
              <h1 className="text-white text-3xl font-bold text-center">
                Thank you for subscribing to our newsletter!
              </h1>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center space-y-4"
              >
                <h1 className="text-white text-3xl font-bold mb-4 text-center">
                  Subscribe to our newsletter
                </h1>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full lg:w-[350px] p-4 rounded-md text-white bg-black/40 backdrop-blur-md outline-none border-2 border-transparent focus:border-blue-500 placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full lg:w-[350px] p-4 rounded-md text-white bg-black/40 backdrop-blur-md outline-none border-2 border-transparent focus:border-blue-500 placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-3 px-6 rounded-full font-semibold transition duration-300 transform hover:bg-blue-700 hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
