import myPhoto from '../../assets/pictures/moi2-min.png'

function WelcomeSection() {
    return (
        <section id="welcome" className="section welcome">
            <div className="welcome__inset">
                <img src={ myPhoto } alt="moi" className="welcome__inset__image"/>
            </div>

            <div className="welcome__content">
                <h2 className="welcome__content__title">Bienvenue</h2>
                <p className="welcome__content__text">
                    Je me présente, je m'appelle Pierre, après avoir passé 20 ans en tant qu'assistant de vente, j'ai décidé de me reconvertir dans le développement web.<br/>
                    Ce site a été créé dans le but de vous présenter mon travail à travers les différents projets que j'ai réalisés.<br/>
                    Vous y trouverez également mon parcours professionnel ainsi qu'un formulaire de contact.<br/><br/>
                    Bonne visite !
                </p>
            </div>
        </section>
    )
}

export default WelcomeSection;