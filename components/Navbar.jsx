'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-05" />
    <div className={`${styles.innerWidth} mx-auto flex justify-center gap-8`}>
      <img
        src="./lyarah.png"
        className="w-[200px] h-[200px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;