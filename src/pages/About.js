import React from 'react'
import NavBar from '../components/NavBar'
import Waves from '../components/Waves'
import Footer from '../components/Footer'
import "./About.css"
import researchvector from "../assets/researchvector.svg"
import majors from "../assets/majors.png"
import size from "../assets/size.png"
import current from "../assets/current.png"
import past from "../assets/2021.png"
import past2 from "../assets/2020.png"
const About = () => {
    return (
        <>
        <NavBar />
        <div className="section1 pl1">
            <div>
                <p className="fs1">
                    Microbiome technology addressing climate change
                </p>
            </div>
            <div>
                <p className="fs2">
                    We began our project by focusing on the relationship between overconsumption and climate change. 
                    Through our research, we quickly learned current climate solutions need to be more rigorous. 
                    Our mainstream solutions typically do not address the roots of our crises: racial capitalism, nature/society divide, overproduction and overconsumption, 
                    and profit-oriented decision making. 
                    <br></br>
                    <br></br>
                    The question then became one of setting better standards. 
                    When the leading organizations fail to take a holistic approach to climate change, 
                    it reveals a wide-scale deficiency in an understanding of the problem, 
                    which in turn affects the credibility and quality of solutions being created. 
                </p>
           </div>
        </div>
        <div className="section2 g1">
            <img className="research-vector" src={researchvector} />

            <div className="section1">
                <img  src={size} />
                <img  src={majors} />
            </div>


            <img className="research-vector" src={researchvector} />
        </div>
      
        <p className="fs1 pl1">
            Our Team 
        </p>
        <div className="section3 pl1">
            <div>

            
                <p className="fs3">
                    Leading Team
                </p>
                
                <p className="fs2">
                Kayla Hidayat, Ankita Morari, Natalie Allen, Anjika Morari, Priya Riley
                </p>
            </div>
            <div> 
                <p className="fs3">
                    Current Contributors
                </p>
                <p className="fs2">
                Maya Bhandari, Lillian Huang, Sejal Sarda, Chelsea Lam, Amber Louie, Bella Young, Bibiane Huang, Farrah Yee, Grace Miller, Aneesh Veeramachaneni
                </p>
            </div>

            <div> 
                <p className="fs3">
                    Past Contributors
                </p>
                
                <p className="fs2">
                Julie Luo, Mary Wang, Max Vink, Emma Caufield, Ankita Joshi, Léonie Chalochet, Dani Kim
                </p>
            </div>

           
        </div>

        <div className="section2">
            <p className="fs3 pl1">
                Current
            </p>
            <img className="no-flex" src={current} />
            <p className="fs3 pl1 ">
                2021
            </p>
            <img className="no-flex" src={past} />
            <p className="fs3 pl1">
                2020
            </p>
            <img className="no-flex" src={past2} />


        </div>

        <Waves />
        <Footer />
        </>
    )
}
export default About;