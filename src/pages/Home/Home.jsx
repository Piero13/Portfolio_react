import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import PageSection from "../../components/PageSection/PageSection";

function Home() {
  return (
    <main id='home' className='main'>
      {/* welcome section */}
      <WelcomeSection/>

      {/* projects section */}
      <PageSection title={"Projets"}>

      </PageSection>

      {/* career section */}
      <PageSection title={"Parcours"}>
        
      </PageSection>

    </main>
  );
}

export default Home;
