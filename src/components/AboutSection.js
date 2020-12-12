import home1 from '../img/home1.png'
import {About, Description, Image, Hide} from "../styles";


const AboutSection = () => {
  return(
      <About>
        <Description>
          <div className="title">
            <Hide>
              <h2>
              We work to make
              </h2>
            </Hide>
            <Hide>
              <h2>
                your <span>dreams</span>
              </h2>
            </Hide>
            <Hide>
              <h2>
                come true.
              </h2>
            </Hide>
            <p>Contact us for any photography or video ideas. We have professionals with amazing skills</p>
            <button>Contact us</button>
          </div>
        </Description>
        <Image>
          <img src={home1} alt="guy with a camera"/>
        </Image>
      </About>
  )
}

export default AboutSection