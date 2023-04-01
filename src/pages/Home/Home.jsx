import { NavLink } from "react-router-dom";
//components import
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import Slider from "../../components/Slider/Slider";
import CareerElement from "../../components/CareerElement/CareerElement";
//datas import
import {picturesDatas} from '../../datas/picturesDatas';
import {careerDatas} from '../../datas/careerDatas';

function Home() {
  return (
    <main id='home' className='main'>
      {/* welcome section */}
      <WelcomeSection/>

      {/* projects section */}
      <section id="projects-section" className="section">
        <div className="section__inset">
          <h2 className="section__title">Projets</h2>
        </div>
        
        <Slider slides={picturesDatas}/>

        <p><NavLink to="/projects" className="link">Voir les projets</NavLink></p>
      </section>

      {/* career section */}
      <section id="career-section" className="section">
        <div className="section__inset">
          <h2 className="section__title">Parcours</h2>
        </div>

        {careerDatas.map((careerData) => (
          <CareerElement
            key={careerData.title}
            title={careerData.title}
            description={careerData.description}
            date={careerData.date}
            icon={careerData.icon}
          />
        ))}

        <p><NavLink to="/career" className="link">Voir mon parcours</NavLink></p>
      </section>

    </main>
  );
}

export default Home;
