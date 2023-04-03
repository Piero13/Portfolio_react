function Contact() {
    return (
        <main id="contact" className="main">
            <section className="section">
                <div className="section__inset">
                    <h2 className="section__title">Contact</h2>
                </div>

                <form action="" className="form">
                    <div className="form__div">
                        <div className="form__item">
                            <label htmlFor="lastname" className="form__label">Nom*</label>
                            <input type="text" name="lastname" id="lastname" className="form__input" required/>
                        </div>
                        <div className="form__item">
                            <label htmlFor="firstname" className="form__label">Prénom*</label>
                            <input type="text" name="firstname" id="firstname" className="form__input" required/>
                        </div>
                        <div className="form__item">
                            <label htmlFor="email" className="form__label">Email*</label>
                            <input type="email" name="email" id="email" className="form__input" required/>
                        </div>
                        <div className="form__item">
                            <label htmlFor="phone" className="form__label">Téléphone</label>
                            <input type="tel" name="phone" id="phone" className="form__input"/>
                        </div>
                    </div>
                    
                    <div className="form__div">
                        <div className="form__item">
                            <label htmlFor="subject" className="form__label">Objet du message*</label>
                            <input type="text" name="subject" id="subject" className="form__input" required/>
                        </div>
                        <div className="form__item">
                            <label htmlFor="message">Message*</label>
                            <textarea name="message" id="message" cols="30" rows="10" className="form__input" required></textarea>
                        </div>
                    </div>

                    <button type="submit" className="form__btn">Envoyer</button>
                </form>
            </section>
        </main>
    )
}

export default Contact;