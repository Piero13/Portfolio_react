import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"

function CareerElement({ title, description, date, icon }) {
    return (
        <>
            <div className="timeline-element">
                <div className="timeline-element__date">
                    <p>{ date }</p>
                </div>   

                <div className="timeline-element__icon">
                    <FontAwesomeIcon icon={ icon } className="career-icon"/>
                </div>

                <div className="timeline-element__card">
                    <h3>{ title }</h3>
                    <p>{ description }</p>
                    <FontAwesomeIcon icon={ faCaretLeft } className="timeline-element__card__caret"/>
                </div>
            </div>
        </>
    )
}

export default CareerElement