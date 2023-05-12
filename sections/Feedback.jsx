'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <h1 className="font-bold md:text-[32px] text-[22px] sm:leading-[40.32px] leading-[36.32px] text-white">
          Contact us at
        </h1>
      </motion.div>
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <h3 className="font-bold md:text-[32px] text-[22px] sm:leading-[40.32px] leading-[36.32px] text-white">
          matthew@lyaraheducation.com
        </h3>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
