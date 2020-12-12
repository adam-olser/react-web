import { Link } from 'react-router-dom'

import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
import styled from "styled-components";

const OurWork = () => {
  return(
      <Work>
        <h2>Our Work</h2>
        <Movie>
          <h2>The Athlete</h2>
          <div className="line"/>
          <Link>
            <img src={athlete} alt="athlete"/>
          </Link>
        </Movie>
        <Movie>
          <h2>The Racer</h2>
          <div className="line"/>
          <Link>
            <img src={theracer} alt="theracer"/>
          </Link>
        </Movie>
        <Movie>
          <h2>Good Times</h2>
          <div className="line"/>
          <Link>
            <img src={goodtimes} alt="goodtimes"/>
          </Link>
        </Movie>
      </Work>
  )
}

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2{
    padding: 1rem 0rem;
  }
`
const Movie = styled.div`
  padding-bottom: 10rem;
  .line{
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

export default OurWork