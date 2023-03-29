import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";

function Home() {
  return (
    <main id='home' className='main'>
      {/* welcome section */}
      <WelcomeSection/>

      {/* projects section */}
      <ProjectsSection title={"Projets"}/>

      {/* career section */}


    </main>
  );
}

export default Home;
