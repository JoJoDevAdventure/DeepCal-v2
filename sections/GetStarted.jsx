'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { TitleText, TypingText } from '../components';

const GetStarted = () => {
  // Setting up scroll-based parallax effect
  const { scrollY } = useScroll();

  // State to check screen size
  const [isMobile, setIsMobile] = useState(false);

  // Set up an effect to track window width for responsive scroll values
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust mobile width threshold as needed
    };

    // Initialize on mount and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Use different translation values for mobile and desktop
  const translateXFirstImage = useTransform(scrollY, [0, 4000], [0, isMobile ? 200 : 500]);
  const translateXSecondImage = useTransform(scrollY, [0, 4500], [0, isMobile ? -200 : -800]);
  const translateXThirdImage = useTransform(scrollY, [0, 5000], [0, isMobile ? 200 : 800]);

  return (
    <section className="relative z-10 overflow-hidden">
      <motion.div className="w-screen flex flex-col gap-8 justify-center items-center">
        <motion.div className="text-center w-full">
          <TypingText title="| Wide Range of Calibration" textStyles="text-center"/>
          <TitleText title={<>With Zero-Click You Calibrate</>} textStyles="text-center"/>
        </motion.div>

        <div>
          <motion.div 
            className="relative w-[170vw] h-[300px] md:h-[200px] lg:h-[350px] overflow-hidden"
          >
            <motion.img
              style={{ x: translateXFirstImage }}
              src="/camera.png"
              alt="Calibration type 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="gradient-dark" />
              <TitleText title={<>CAMERA</>} textStyles="text-white font-bold md:text-[102px] text-[62px] relative z-10"/>
            </div>
          </motion.div>

          <motion.div
            className="relative w-[170vw] h-[350px] overflow-hidden"
          >
            <motion.img
              style={{ x: translateXSecondImage }}
              src="/radar.png"
              alt="Calibration type 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="gradient-dark" />
              <TitleText title={<>RADAR</>} textStyles="text-white font-bold md:text-[102px] text-[62px] relative z-10"/>
            </div>
          </motion.div>

          <motion.div
            className="relative w-[170vw] h-[350px] overflow-hidden"
          >
            <motion.img
              src="/lidar.png"
              alt="Calibration type 3"
              className="w-full h-full object-cover"
              style={{ x: translateXThirdImage }}
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="gradient-dark" />
              <TitleText title={<>LIDAR</>} textStyles="text-white font-bold md:text-[102px] text-[62px] relative z-10"/>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default GetStarted;