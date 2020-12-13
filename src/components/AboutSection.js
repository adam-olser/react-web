import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";

//Framer motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Description>
        <Wave />
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </Hide>
          <motion.p variants={fade}>
            Contact us for any photography or video ideas. We have professionals
            with amazing skills
          </motion.p>
          <motion.button variants={fade}>Contact us</motion.button>
        </motion.div>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
