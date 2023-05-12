'use client';

import { motion } from 'framer-motion';

import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-03 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| About L'yarah"
        textStyles="text-center"
      />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">L'yarah </span>
        is an educational consultancy dedicated to bringing the best math teachers and the best
        international schools together. Through a rigorous, multi-interview process, schools and teachers can come
        together to <span className="font-extrabold text-white">change the world</span>
        .
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="./arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
