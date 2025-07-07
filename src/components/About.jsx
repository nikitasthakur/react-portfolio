import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
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

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
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
       I&apos;m Nikita, a passionate AI Engineer and Data Analyst specializing in healthcare technology solutions. With expertise in both machine learning and full-stack development, I create innovative applications that bridge the gap between complex data insights and user-friendly interfaces, particularly in healthcare domains where technology can significantly improve patient outcomes.

<br/>
<br/>
My experience spans building interactive healthcare dashboards, implementing secure ETL pipelines, developing NLP applications for clinical data, and creating HIPAA-compliant systems. I thrive on solving complex problems that require both technical precision and creative thinking, whether it&apos;s optimizing database performance for faster API responses or developing intuitive visualizations that help medical professionals make data-driven decisions.

<br/>
<br/>
Beyond coding, I&apos;m driven by the opportunity to use technology for meaningful impact in healthcare. When I&apos;m not developing applications or analyzing data, you&apos;ll find me exploring the latest AI research, contributing to open-source projects, or capturing the world through photography – experiences that continuously inspire fresh perspectives in my technical work.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

const AboutSection = SectionWrapper(About, "about");
export default AboutSection;