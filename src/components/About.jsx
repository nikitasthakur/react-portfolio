import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] 
          flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} 
          className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
       I'm Nikita, a passionate and creative Full Stack Developer with a knack for building innovative digital solutions. With a deep understanding of both front-end and back-end development, I bring a holistic approach to my work, aiming to create seamless user experiences that captivate and engage.
 
 <br/>
 <br/>
 Beyond the lines of code, I consider myself a problem solver, always seeking out new challenges that push me to think outside the box. I believe in the power of technology to transform businesses and positively impact people's lives, and I'm driven by the opportunity to be a part of that transformation. Outside of coding, you'll often find me exploring the great outdoors, capturing moments through my camera lens, or sketching artworks. These passions keep me inspired and provide a fresh perspective that I bring back to my work, infusing it with creativity and innovation.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")