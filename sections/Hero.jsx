'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(0.1)} className={styles.heroHeading}>
          L'yarah
        </motion.h1>
        <motion.div
          variants={textVariant(1.1)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Education</h1>
        </motion.div>
        <motion.div
          variants={textVariant(1.6)}
          className="flex flex-row justify-center items-center"
        >
          <button type="button" className="flex h-fit py-4 px-7 mr-5 sm:mr-16 bg-[#25618B] rounded-[32px] gap-[12px]">
          <img
            src="./blog.svg"
            alt="email"
            className="w-[24px] h-[24px] object-contain"
          />
          <a target="_blank" href="https://lyaraheducation.substack.com/">
            <span className="font-normal text-[16px] text-white">
              Blog
            </span>
          </a>
        </button>
        
        </motion.div>
      </div>
      {/* <motion.div
        variants={slideIn('right', 'tween', 1.5, 1.5)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="./cover.jpg"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

      </motion.div> */}
    </motion.div>
  </section>
);

export default Hero;
