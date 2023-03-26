function PageSection({title}) {
    return (
        <section id="section" className="section page-section">
            <div className="page-section__inset">
                <h2 className="page-section__title">{title}</h2>
            </div>
        </section>
    )
}

export default PageSection;