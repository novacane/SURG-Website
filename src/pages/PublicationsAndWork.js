import React from 'react'
import NavBar from '../components/NavBar'
import Waves from '../components/Waves'
import Footer from '../components/Footer'
import "./PublicationsAndWork.css"
import img from '../assets/tinypeoplemeltingplanet.png'
import researchvector from "../assets/researchvector.svg"

const PublicationsAndWork = () => {
  return (
    <>
    <NavBar />
    <p className="fs1 pl">
        Publications & Work
    </p>
    <div className="research-top">
      <div>
        <p className= "fs2">
        We apply our framework, and constantly build upon it, for the purpose of analyzing current solutions 
        and processes from a holistic lens. In our case study series 1, 
        we analyze “Silver Bullet Solutions” like Electrification and Plant Based Meats.
         In our Case Study Series 2, we analyze radical solutions like Regenerative Farming and Minimalism. 

        </p>
        <br></br>
        <p className= "fs2">
        Our aim is to be able to critically, and intricately, understand 
        the true impact potential of certain solutions to ecological, social,  
        and climate crisis. 
        </p>
      </div>
      <img className="tiny-people-melting-planet" src={img} />
    </div>

    <img className="research-vector" src={researchvector} />

    <br></br>
    <br></br>
    <br></br>


    <div className="stack">
       <div className="accent color2"></div>

       <div className="inner">
        <h1 className="subheading pl">
            Case Study Series 1: Silver Bullet Solutions
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


    <div className="stack">
       <div className="accent color1"></div>

       <div className="inner">
        <h1 className="subheading pl">
          Case Study Series 2: Radical Solutions 
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


export default PublicationsAndWork;