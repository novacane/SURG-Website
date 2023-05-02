import React from 'react'
import NavBar from '../components/NavBar'
import Waves from '../components/Waves'
import Footer from '../components/Footer'
import "./Research.css"
import ResearchImg from "../assets/tinypeoplemeltingplanet.png"
import researchvector from "../assets/researchvector.svg"
import researchvector2 from "../assets/researchvector2.svg"
const Research = () => {
  return (
    <>
    <NavBar />
    <h1 className="our-research">
        Our Research 
    </h1>
    <div className="research-top">
      <div>
        <p className= "our-research-body">
          We began our project by focusing on the relationship between
          overconsumption and climate change. Through our research, we quickly
          learned current climate solutions need to be more rigorous. Our mainstream
          solutions typically do not address the roots of our crises: racial
          capitalism, nature&#x2F;society divide, overproduction and
          overconsumption, and profit-oriented decision making. 
        </p>
        <br></br>
        <p className= "our-research-body">
          The question then
          became one of setting better standards. When the leading organizations
          fail to take a holistic approach to climate change, it reveals a
          wide-scale deficiency in an understanding of the problem, which in turn
          affects the credibility and quality of solutions being created.
        </p>
      </div>
      <img className="tiny-people-melting-planet" src={ResearchImg} />
    </div>

    <br></br>
    <br></br>
    <br></br>
    <img className="research-vector" src={researchvector} />
    <br></br>
    <br></br>

    <div className="stack">
       <div className="accent color1"></div>

       <div className="inner">
        <h1 className="subheading pl">
            Preliminary Research
        </h1> 
       </div>
    </div>
    <br></br>
    <div className="research-middle">
      <p className="preliminary-research-body">
      When we first started out, we wanted a full picture of where our climate and sustainability 
      challenges stemmed from and where we were on the scale of finding solutions. We consulted
       key academics who have long paved the way for stronger standards of sustainability, and
        who have greatly guided our framework and principles.
      </p>
      <img className="research-vector-2" src={researchvector2} />
      <p className="preliminary-research-body">
      Core Readings
      <ul>
        <li>7 Cheap Things - Raj Patel & Jason Moore</li>
        <li>A World on a Collision Course + Barefoot</li>
        <li>Economic18s - Max Neef</li>
        <li>Transforming Consumption - Dara O’ Rourke</li>
        <li>Consciousness & Sustainability - Sadhguru</li>
      </ul> 
      </p>
    </div>

    <br></br>
  
    
    <div className="stack">
       <div className="accent color2"></div>

       <div className="inner">
        <h1 className="subheading pl">
            Our Work
        </h1> 
       </div>
    </div>

    <div className="research-bottom">
      <div className="research-rectangle">
        <h1 className="subheading pl2">
          1
        </h1>
        <div className="research-line rl1"> 
        </div>
        <div className="fs pl2">
          Creation of Our Framework
        </div>

        <div className="fs2">
          <ul>
          <li>What do good climate solutions that address the root causes look like?</li>
          <li>Which topics are essential to explicitly clarify and why?</li>
          <li>How do we integrate intersectionality and advocate for multiple forms of justice through this framework?</li>
          </ul> 
        </div>

      </div>

      <div className="research-rectangle">
        <h1 className="subheading pl2">
          2
        </h1>

        <div className="research-line rl2"> </div>

        <div className="fs pl2">
          Assessment of the Solution
        </div>

        <div className="fs2">
          <ul>
          <li>How does this solution measure up in our framework? </li>
          <li>What insights does our framework reveal? </li>
          
          </ul> 
        </div>

        

      </div>

      <div className="research-rectangle">
        <h1 className="subheading pl2">
          3
        </h1>
       
        <div className="research-line rl3"> </div>  

        <div className="fs pl2">
          Improvement of the Solution
        </div>

        <div className="fs2">
          <ul>
          <li>How can we apply our guiding academic theory to point out actionable steps of improvement? </li>
          </ul> 
        </div>

       
      </div>
      
      
    </div>
    



    <Waves />
    <Footer />
    </>
  )
}

export default Research;

