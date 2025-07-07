import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-2 z-10 pointer-events-none`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='flex flex-col w-full max-w-2xl lg:max-w-4xl pointer-events-auto'>
          {/* Main intro section */}
          <div className='flex-1 min-w-0'>
            <h1 className={`${styles.heroHeadText} text-white text-[24px] sm:text-[32px] lg:text-[40px]`}>
              Hi, I&#39;m <span className='text-[rgb(145,94,255)]'>Nikita</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 text-[10px] sm:text-[12px] lg:text-[14px]`}>
              AI Engineer & Data Analyst specializing in Healthcare
            </p>

          </div>
          
          {/* Extended description section */}
          <div className='mt-2 hidden sm:block'>
            <p className='text-secondary text-[10px] sm:text-[12px] lg:text-[14px] leading-[18px] sm:leading-[20px] max-w-3xl'>
              I design intelligent systems and visual tools that extract insights from clinical and operational data.
              Specializing in healthcare-focused AI solutions that drive better patient care and decision-making.
            </p>
          </div>
        </div>
      </div>

      <div className='absolute inset-0 top-0 w-full h-full flex justify-center items-center z-0'>
        <div className='w-full h-full'>
          <ComputersCanvas />
        </div>

      </div>

      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='mt-2 w-[30px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;